let bombe = [];

//Creo variabile per il punetggio
let punti;
let lose;

//Bottone per iniziare
document.getElementById('btn-play').addEventListener('click', function () {

    //Azzero variabile per il punetggio
    punti = 0;
    lose = 0;

    //Recupero il valore del livello
    let livello = document.getElementById('difficolta')
    let valore = livello.value;

    let nCelle = 49;

    //Aggiungo display none all'avvio
    document.getElementById('inizio').classList.add('d-none')
    //Rimuovo display none al restart
    document.getElementById('restart').classList.remove('d-none')
    document.getElementById('punteggio').classList.remove('d-none')

    let grid = document.getElementById('griglia')


    //in base alla dificoltà scelta cambia la griglia
    if (valore == 'grid-medio') {
        nCelle = 81
    } else if (valore == 'grid-difficile') {
        nCelle = 100
    }

    //Creo ciclo per completare array con le bombe
    do {
        //genero numero casuale
        let x = Math.floor(Math.random() * (nCelle - 1 + 1)) + 1;

        //se bombe non contine il numero inseriscilo nell'array
        if (!bombe.includes(x)) {
            bombe.push(x)
        }
    } while (bombe.length < 16)

    nVincente = nCelle - 16
    // Aggiungo alla grigia la classe = al valore
    grid.classList.add(valore)

    //Creo ciclo for per creare i quadrati
    for (let i = 1; i <= nCelle; i++) {
        //Richiamo funzione CREAQUADRATO
        let quadrato = creaQuadrato(i)

        //Richiamo funzione Cambio colore
        clickColor(grid, valore, quadrato, i, bombe, nVincente)

        //Aggiungo i DIV nella griglia
        grid.append(quadrato)
    }

    //Bottone Restart
    document.getElementById('btn-restart').addEventListener('click', function () {

        restart(grid, valore)

    })
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//funzione restart
function restart(griglia, valore) {
    griglia.innerHTML = ''
    document.getElementById('inizio').classList.remove('d-none')
    document.getElementById('punteggio').classList.add('d-none')
    document.getElementById('restart').classList.add('d-none')
    document.getElementById('n-punteggio').innerText = '0'

    bombe = []
    //rimuovo dimensione della griglia
    griglia.classList.remove(valore)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//funzione crea quadrato
function creaQuadrato(numero) {

    //Creo tag DIV
    let myDiv = document.createElement('div');

    //Aggiungo la classe quadrtao
    myDiv.classList.add('quadrato')

    //Restituisco il DIV
    return myDiv
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//funzione CLICK
function clickColor(griglia, valore, quadrato, numero, array, numeroVincente) {
    //Creo evento click
    quadrato.addEventListener('click', function () {
        //Se clicco un quadrato che contine il numero di un array inserisci rosso
        if (array.includes(numero)) {
            quadrato.classList.add('bck-red')
            lose += 1
            if (lose == 6) {
                restart(griglia, valore)
                alert('Hai Perso')
            }
        } else {
            //altrimenti inserisci Blu
            quadrato.classList.add('bck-blu')
            punti += 1;
            document.getElementById('n-punteggio').innerText = punti
        }


        if (punti == numeroVincente) {
            alert('Hai Vinto')
        }

        console.log(punti)
        //Stamplo la cella selezionata
        console.log(numero)
    }, { once: true })
}





