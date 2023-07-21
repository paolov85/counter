window.addEventListener('DOMContentLoaded', function () {

    // seleziono gli elementi di cui avrò bisogno
    let toSumm = document.getElementsByClassName('toSumm');
    let display = document.getElementById('display');
    let memo = document.getElementById('memo');
    let result = 0;
    let ad = 0;

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
                displayInner(result);
                return;

            case 'save':
                ad++;
                save();
                createBtn();
                return;

        };

        result += toAdd;
        displayInner(result);

    }

    function save() {
        if (!result == 0) {
            let memoAdd = document.createElement("div");
            memoAdd.setAttribute("class", "memRow col-3");
            let memoAddText = document.createTextNode(result);
            memo.appendChild(memoAdd);
            memoAdd.appendChild(memoAddText);
        }
    }

    function createBtn() {
        if (!result == 0 && ad == 2) {
            let summButton = document.createElement("button");
            summButton.setAttribute("class", "btn btn-primary");
            let summButtonText = document.createTextNode('Fai la Somma');
            summButton.appendChild(summButtonText);
            memo.appendChild(summButton);
        }
    }

    function displayInner(result) {
        display.innerHTML = `<p>${result}</p>`;
    }
});