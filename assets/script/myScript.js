window.addEventListener('DOMContentLoaded', function () {

    // seleziono gli elementi di cui avrò bisogno
    let toSumm = document.getElementsByClassName('toSumm');
    let display = document.getElementById('display');
    let result = 0;

    //tramite il ciclo for aggiungo un evento click ad ogni pulsante, che lancia la funzione 'somma'
    for (i = 0; i < toSumm.length; i++) {
        toSumm[i].addEventListener('click', somma)
    }

    //la funzione 'somma' ottiene l'id del pulsante cliccato ed in base ad esso assegna un diverso valore da aggiungere/sottrarre al totale, mostrandolo poi sul display
    function somma() {

        toAddId = this.id

        switch (toAddId) {

            case 'oneDown':
                toAdd = -1;
                break;

            case 'fiveDown':
                toAdd = -5;
                break;

            case 'oneUp':
                toAdd = 1;
                break;

            case 'fiveUp':
                toAdd = 5;
                break;

            case 'reset':
                result = 0;
                display.innerHTML = `<p>${result}</p>`;
                return;

        };

        result += toAdd;
        display.innerHTML = `<p>${result}</p>`;

    }

});