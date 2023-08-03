window.addEventListener('DOMContentLoaded', function () {

    //la funzione 'structure' è dedicate alla costruzione della pagina html
    structure();

    // seleziono gli elementi di cui avrò bisogno
    const display = document.getElementById('display');
    const memo = document.getElementById('memo');
    let result = 0;
    let ad = 0;

    //
    clickedEl = document.querySelector('.counter');

    clickedEl.onclick = (event) => {
        let toAdd;
        let toAddId;
        target = event.target.closest('button');
        target ? toAddId = target.id : toAdd = null;

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

            case 'totSumm':
                reset();
                total();
                return;
        };

        result += toAdd;
        displayInner(result);
    }

    //la funzione 'save' verifica che la var result sia popolata, in caso positivo crea un div nel quale salvare il valore che attualmetne è visualizzato sul display e lo appende nella corretta posizione
    function save() {
        if (!result == 0) {
            ad++;
            const memoAdd = document.createElement('div');
            memoAdd.setAttribute('class', 'memRow col-2');
            const memoAddText = document.createTextNode(result);
            memo.appendChild(memoAdd);
            memoAdd.appendChild(memoAddText);
        }
    }

    //la funzione 'createBtn' controlla che la var result sia popolata, in caso positivo, crea il button Fai la Somma con i relativi attributi e lo appende nella corretta posizione
    function createBtn() {
        if (!result == 0 && ad == 2) {
            const summButton = document.createElement('button');
            summButton.setAttribute('class', 'btn btn-primary');
            summButton.setAttribute('id', 'totSumm');
            // summButton.addEventListener('click', total);
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
    function displayInner(disp) {
        display.innerHTML = `<p>${disp}</p>`;
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

    //la funzione 'structure' lancia in sequenza tutte le funzioni dedicate alla costruzione dei singoli elementi html
    function structure() {
        baseStr();
        divDisplay();
        divDecrease()
        divIncrease()
        btnSave();
        btnReset();
    }

    //le seguenti funzioni sono dedicate alla costruzione dei pulsanti nella pagine html
    function baseStr() {
        
        var attributes = {
            class: 'container-sm d-flex flex-column align-items-center justify-content-center pb-5',
        }
        const divMain = createElementWithAttibutes('main', attributes);
        
        var attributes = {
            class: 'counter container w-100 my-5 py-4',
            style: 'height: 30vh'
        }
        const divCounter = createElementWithAttibutes('div', attributes);
      
        var attributes = {
            class: 'firstLine row',
        }
        const divFirstLine = createElementWithAttibutes('div', attributes);
        
        const divSecondLine = document.createElement('div');
        divSecondLine.setAttribute('class', 'secondLine row');
        
        const divThirdLine = document.createElement('div');
        divThirdLine.setAttribute('class', 'thirdLine row m-3');
        divThirdLine.setAttribute('id', 'memo');
        divThirdLine.style.overflow = "auto";
        
        document.body.appendChild(divMain);
        divMain.appendChild(divCounter);
        divCounter.appendChild(divFirstLine);
        divCounter.appendChild(divSecondLine);
        divCounter.appendChild(divThirdLine);
    }

    function divDisplay() {
        var attributes = {
            id: 'display',
            class: 'col-12 col-md-6 order-md-2 text-center p-3',
        }
        const divDisplay = createElementWithAttibutes('div', attributes);
        const pDisplay = createElementWithAttibutes('div', '');
        const pDisplayText = document.createTextNode(0);
        pDisplay.appendChild(pDisplayText);
        divDisplay.appendChild(pDisplay);
        appendElement('.firstLine', divDisplay)
    }

    function createElementWithAttibutes(tagName, attributes) {
        const element = document.createElement(tagName);
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
        return element;
    }

    function appendElement(selector, toAppend) {
        const selected = document.querySelector(selector);
        selected.appendChild(toAppend);
    }


    function divDecrease() {

        var attributes = {
            class: 'decrease col-6 col-md-3 order-md-1',
        }
        const divDecrease = createElementWithAttibutes('div', attributes);
        appendElement('.firstLine', divDecrease)

        var attributes = {
            id: 'oneDown',
            class: 'toSumm btn w-100',
        }
        const btnOneDown = createElementWithAttibutes('button', attributes);

        var attributes = {
            src: 'assets/img/down.SVG',
        }
        const btnOneDownImg = createElementWithAttibutes('img', attributes);

        btnOneDown.appendChild(btnOneDownImg);
        appendElement('.decrease', btnOneDown)

        var attributes = {
            id: 'fiveDown',
            class: 'toSumm btn w-100',
        }
        const btnFiveDown = createElementWithAttibutes('button', attributes);

        var attributes = {
            src: 'assets/img/fiveDownn.SVG',
        }
        const btnFiveDownImg = createElementWithAttibutes('img', attributes);

        btnFiveDown.appendChild(btnFiveDownImg);
        appendElement('.decrease', btnFiveDown)
    }

    function divIncrease() {
        const firstLine = document.querySelector('.firstLine');
        const divIncrease = document.createElement('div');
        divIncrease.setAttribute('class', 'increase col-6 col-md-3 order-md-3');
        firstLine.appendChild(divIncrease);

        const decrease = document.querySelector('.increase');
        const btnOneUp = document.createElement('button');
        btnOneUp.setAttribute('class', 'toSumm btn w-100');
        btnOneUp.setAttribute('id', 'oneUp');
        const btnOneUpImg = document.createElement('img');
        btnOneUpImg.setAttribute('src', 'assets/img/up.SVG');
        btnOneUp.appendChild(btnOneUpImg);
        decrease.appendChild(btnOneUp);

        const btnFiveUp = document.createElement('button');
        btnFiveUp.setAttribute('class', 'toSumm btn w-100');
        btnFiveUp.setAttribute('id', 'fiveUp');
        const btnFiveUpImg = document.createElement('img');
        btnFiveUpImg.setAttribute('src', 'assets/img/fiveUpp.SVG');
        btnFiveUp.appendChild(btnFiveUpImg);
        decrease.appendChild(btnFiveUp);
    }

    function btnSave() {
        const secondLine = document.querySelector('.secondLine');
        const divSave = document.createElement('div');
        divSave.setAttribute('class', 'toSumm options d-grid col-12');
        const btnSave = document.createElement('button');
        btnSave.setAttribute('class', 'btn btn-primary');
        btnSave.setAttribute('id', 'save');
        const btnSaveText = document.createTextNode('Save');
        btnSave.appendChild(btnSaveText);
        divSave.appendChild(btnSave)
        secondLine.appendChild(divSave);
    }

    function btnReset() {
        const secondLine = document.querySelector('.secondLine');
        const divReset = document.createElement('div');
        divReset.setAttribute('class', 'toSumm options d-grid col-12');
        const btnReset = document.createElement('button');
        btnReset.setAttribute('class', 'btn btn-primary');
        btnReset.setAttribute('id', 'reset');
        const btnResetText = document.createTextNode('Reset');
        btnReset.appendChild(btnResetText);
        divReset.appendChild(btnReset)
        secondLine.appendChild(divReset);
    }

});