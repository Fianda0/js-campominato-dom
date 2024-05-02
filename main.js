let bombe = [];

//Bottone per iniziare
document.getElementById('btn-play').addEventListener('click', function () {

    //Recupero il valore del livello
    let livello = document.getElementById('difficolta')
    let valore = livello.value;

    let nCelle = 49;

    //Aggiungo display none all'avvio
    document.getElementById('inizio').classList.add('d-none')
    //Rimuovo display none al restart
    document.getElementById('restart').classList.remove('d-none')

    let grid = document.getElementById('griglia')


    //in base alla dificoltà scelta cambia la griglia
    if (valore == 'grid-medio') {
        nCelle = 81
    } else if (valore == 'grid-difficile') {
        nCelle = 100
    }

    // Aggiungo alla grigia la classe = al valore
    grid.classList.add(valore)


    //Creo ciclo for per creare i quadrati
    for (let i = 1; i <= nCelle; i++) {

        //Richiamo funzione CREAQUADRATO
        let quadrato = creaQuadrato(i)

        //Richiamo funzione Cambio colore
        clickColor(quadrato, i)

        //Aggiungo i DIV nella griglia
        grid.append(quadrato)
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

    //Bottone Restart
    document.getElementById('btn-restart').addEventListener('click', function () {
        //svuoto la griglia
        grid.innerHTML = ''
        document.getElementById('inizio').classList.remove('d-none')
        document.getElementById('restart').classList.add('d-none')

        //rimuovo dimensione della griglia
        grid.classList.remove(valore)

    })
})


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
function clickColor(quadrato, numero) {

    //Creo evento click
    quadrato.addEventListener('click', function () {

        //Aggiungo Classe al QUADRATO
        quadrato.classList.add('bck-blu')

        //Stamplo la cella selezionata
        console.log(numero)
    })
}





