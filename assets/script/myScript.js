window.addEventListener('DOMContentLoaded', function () {

   
    function btnOneDown() {
        const decrease = document.querySelector('.decrease');
        const btnOneDown = document.createElement("button");
        btnOneDown.setAttribute("class", "toSumm btn w-100");
        btnOneDown.setAttribute("id", "oneDown");
        const btnOneDownImg = document.createElement("img");
        btnOneDownImg.setAttribute("src", "assets/img/down.SVG");
        btnOneDown.appendChild(btnOneDownImg);
        decrease.appendChild(btnOneDown);
    }

    function btnFiveDown() {
        const decrease = document.querySelector('.decrease');
        const btnFiveDown = document.createElement("button");
        btnFiveDown.setAttribute("class", "toSumm btn w-100");
        btnFiveDown.setAttribute("id", "fiveDown");
        const btnFiveDownImg = document.createElement("img");
        btnFiveDownImg.setAttribute("src", "assets/img/fiveDownn.SVG");
        btnFiveDown.appendChild(btnFiveDownImg);
        decrease.appendChild(btnFiveDown);
    }

    function btnOneUp() {
        const decrease = document.querySelector('.increase');
        const btnOneUp = document.createElement("button");
        btnOneUp.setAttribute("class", "toSumm btn w-100");
        btnOneUp.setAttribute("id", "oneUp");
        const btnOneUpImg = document.createElement("img");
        btnOneUpImg.setAttribute("src", "assets/img/Up.SVG");
        btnOneUp.appendChild(btnOneUpImg);
        decrease.appendChild(btnOneUp);
    }

    function btnFiveUp() {
        const decrease = document.querySelector('.increase');
        const btnFiveUp = document.createElement("button");
        btnFiveUp.setAttribute("class", "toSumm btn w-100");
        btnFiveUp.setAttribute("id", "fiveUp");
        const btnFiveUpImg = document.createElement("img");
        btnFiveUpImg.setAttribute("src", "assets/img/fiveUpp.SVG");
        btnFiveUp.appendChild(btnFiveUpImg);
        decrease.appendChild(btnFiveUp);
    }

    function btnSave() {
        const secondLine = document.querySelector('.secondLine');
        const divSave = document.createElement("div");
        divSave.setAttribute("class", "toSumm options d-grid col-12");
        divSave.setAttribute("id", "save");
        const btnSave = document.createElement("button");
        btnSave.setAttribute("class", "btn btn-primary");
        const btnSaveText = document.createTextNode('Save');
        btnSave.appendChild(btnSaveText);
        divSave.appendChild(btnSave)
        secondLine.appendChild(divSave);
    }

    function btnReset() {
        const secondLine = document.querySelector('.secondLine');
        const divReset = document.createElement("div");
        divReset.setAttribute("class", "toSumm options d-grid col-12");
        divReset.setAttribute("id", "reset");
        const btnReset = document.createElement("button");
        btnReset.setAttribute("class", "btn btn-primary");
        const btnResetText = document.createTextNode('Reset');
        btnReset.appendChild(btnResetText);
        divReset.appendChild(btnReset)
        secondLine.appendChild(divReset);
    }

    btnOneDown();
    btnFiveDown();
    btnOneUp();
    btnFiveUp();
    btnSave();
    btnReset();





    // seleziono gli elementi di cui avrò bisogno
    const toSumm = document.getElementsByClassName('toSumm');
    const display = document.getElementById('display');
    const memo = document.getElementById('memo');
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
            const memoAdd = document.createElement("div");
            memoAdd.setAttribute("class", "memRow col-2");
            const memoAddText = document.createTextNode(result);
            memo.appendChild(memoAdd);
            memoAdd.appendChild(memoAddText);
        }
    }

    //la funzione 'createBtn' controlla che la var result sia popolata, in caso positivo, crea il button Fai la Somma con i relativi attributi e lo appende nella corretta posizione
    function createBtn() {
        if (!result == 0 && ad == 2) {
            const summButton = document.createElement("button");
            summButton.setAttribute("class", "btn btn-primary");
            summButton.setAttribute("id", "totSumm");
            summButton.addEventListener('click', total);
            const summButtonText = document.createTextNode('Fai la Somma');
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