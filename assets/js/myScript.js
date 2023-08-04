window.addEventListener('DOMContentLoaded', function () {

    //creazione struttura
    //main div
    createNewElement('main', 'body', null, ['container-sm', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'pb-5'])
    //counter div
    createNewElement('div', 'main', null, ['counter', 'container', 'w-100', 'my-5', 'py-4']);
    //first, second and third lines div
    createNewElement('div', '.counter', null, ['firstLine', 'row']);
    createNewElement('div', '.counter', null, ['secondLine', 'row']);
    createNewElement('div', '.counter', 'memo', ['thirdLine', 'row', 'm-3']);
    //display div
    createNewElement('div', '.firstLine', 'display', ['col-12', 'col-md-6', 'order-md-2', 'text-center', 'p-3']);
    createNewElement('p', '#display', null, null, '0');
    //decrease div e button
    createNewElement('div', '.firstLine', null, ['decrease', 'col-6', 'col-md-3', 'order-md-1']);
    createNewElement('button', '.decrease', 'oneDown', ['toSumm', 'btn', 'w-100']);
    createNewElement('img', '#oneDown', 'oneDownImg');
    document.getElementById('oneDownImg').src = 'assets/img/down.SVG';
    createNewElement('button', '.decrease', 'fiveDown', ['toSumm', 'btn', 'w-100']);
    createNewElement('img', '#fiveDown', 'fiveDownImg');
    document.getElementById('fiveDownImg').src = 'assets/img/fiveDownn.SVG';
    //increase div e button
    createNewElement('div', '.firstLine', null, ['increase', 'col-6', 'col-md-3', 'order-md-3']);
    createNewElement('button', '.increase', 'oneUp', ['toSumm', 'btn', 'w-100']);
    createNewElement('img', '#oneUp', 'oneUpImg');
    document.getElementById('oneUpImg').src ='assets/img/up.SVG';
    createNewElement('button', '.increase', 'fiveUp', ['toSumm', 'btn', 'w-100']);
    createNewElement('img', '#fiveUp', 'fiveUpImg');
    document.getElementById('fiveUpImg').src ='assets/img/fiveUpp.SVG';
    //save button
    createNewElement('div', '.secondLine', null, ['saveDiv', 'toSumm', 'options', 'd-grid', 'col-12']);
    createNewElement('button', '.saveDiv', 'save', ['btn', 'btn-primary'], 'Save');
    //reset button
    createNewElement('div', '.secondLine', null, ['resetDiv', 'toSumm', 'options', 'd-grid', 'col-12']);
    createNewElement('button', '.resetDiv', 'reset', ['btn', 'btn-primary'], 'Reset');

    //
    const display = document.getElementById('display');
    const memo = document.getElementById('memo');
    let result = 0;
    let ad = 0;

    //il listener aggiunto al div wrapper ha il compito di selezionare, in base al pulsante che viene premuto, quale sarà il valore da assegnare alla var toAdd e la conseguente funzionalità da lanciare
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
                createTotBtn();
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

    //la funzione 'save' verifica che la var result sia popolata, in caso positivo crea un div nel quale salvare il valore attualmente visualizzato sul display e lo appende nella corretta posizione
    function save() {
        if (!result == 0) {
            ad++;
            createNewElement('div', '.thirdLine', null, ['memRow', 'col-2'], result);
            // const memoAdd = document.createElement('div');
            // memoAdd.setAttribute('class', 'memRow col-2');
            // const memoAddText = document.createTextNode(result);
            // memo.appendChild(memoAdd);
            // memoAdd.appendChild(memoAddText);
        }
    }

    //la funzione 'createBtn' controlla che la var result sia popolata, in caso positivo, crea il button Fai la Somma con i relativi attributi e lo appende nella corretta posizione
    function createTotBtn() {
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



    //crea un nuovo elemento e lo appende al genitore
    //(tag, selettore padre, id, classi, contenuto)
    function createNewElement(elTag, elParent, elId, elClasses, elContent) {
        const element = document.createElement(elTag)

        if (elId) {
            element.setAttribute('id', elId)
        }

        if (elClasses) {
            element.classList.add(...elClasses);
        }

        if (elContent) {
            element.innerHTML = elContent;
        }

        if (elParent === 'body') {
            document.body.appendChild(element)
        } else {
            selected = document.querySelector(elParent)
            selected.appendChild(element);
        }
    }

});