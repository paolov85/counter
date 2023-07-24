window.addEventListener('DOMContentLoaded', function () {

    // seleziono gli elementi di cui avrò bisogno
    let toSumm = document.getElementsByClassName('toSumm');
    let display = document.getElementById('display');
    let memo = document.getElementById('memo');
    let result = 0;
    let ad = 0;

    //tramite il ciclo for aggiungo un evento click ad ogni pulsante, che lancia la funzione 'clicked'
    for (i = 0; i < toSumm.length; i++) {
        toSumm[i].addEventListener('click', clicked)
    }

    //la funzione 'clicked' ottiene l'id del pulsante cliccato ed in base ad esso assegna un diverso valore da aggiungere/sottrarre al totale, mostrandolo poi sul display
    function clicked() {

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
                ad = 0;
                reset();
                listDelete();
                deleteBtn();
                return;

            case 'save':
                save();
                createBtn();
                reset();
                return;
        };

        result += toAdd;
        displayInner(result);
    }

    //la funzione 'save' verifica che la var result sia popolata, in caso positivo crea un div nel quale salvare il valore che attualmetne è visualizzato sul display e lo appende nella corretta posizione
    function save() {
        if (!result == 0) {
            ad++;
            let memoAdd = document.createElement("div");
            memoAdd.setAttribute("class", "memRow col-2");
            let memoAddText = document.createTextNode(result);
            memo.appendChild(memoAdd);
            memoAdd.appendChild(memoAddText);
        }
    }

    //la funzione 'createBtn' controlla che la var result sia popolata, in caso positivo, crea il button Fai la Somma con i relativi attributi e lo appende nella corretta posizione
    function createBtn() {
        if (!result == 0 && ad == 2) {
            let summButton = document.createElement("button");
            summButton.setAttribute("class", "btn btn-primary");
            summButton.setAttribute("id", "totSumm");
            summButton.addEventListener('click', total);
            let summButtonText = document.createTextNode('Fai la Somma');
            summButton.appendChild(summButtonText);
            memo.prepend(summButton);
        }
    }

    //la funzione 'listDelete' elimina gli elementi salvati, dopo averli inseriti in un array 
    function listDelete() {
        toDelete = Array.from(document.getElementsByClassName('memRow'));
        for (i = 0; i < toDelete.length; i++) {
            toDelete[i].remove();
        }
    }

    //la funzione 'deleteBtn' elimina il pulsante Fai la Somma
    function deleteBtn() {
        toDeleteBtn = document.getElementById('totSumm');
        toDeleteBtn ? toDeleteBtn.remove() : null;
    }

    //la funzione 'displayInner' è dedicata a visualizzare il risultato nel display dell'applicazione
    function displayInner(result) {
        display.innerHTML = `<p>${result}</p>`;
    }

    //la funzione 'reset' azzera il display dell'applicazione
    function reset() {
        result = 0;
        displayInner(result);
    }

    //la funzione 'total' popola un array con tutti i valori salvati, li somma e visualizza il risultato nel display dell'app, per poi cancellare suddetti valori ed il relativo pulsante Fai la Somma
    function total() {
        let totalNum = 0;
        toTotal = Array.from(document.getElementsByClassName('memRow'));
        for (i = 0; i < toTotal.length; i++) {
            totalNum = totalNum + Number(toTotal[i].innerText);
        }
        displayInner(totalNum);
        listDelete();
        deleteBtn();
        ad = 0;
    }
});