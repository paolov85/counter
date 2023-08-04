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
    document.getElementById('oneUpImg').src = 'assets/img/up.SVG';
    createNewElement('button', '.increase', 'fiveUp', ['toSumm', 'btn', 'w-100']);
    createNewElement('img', '#fiveUp', 'fiveUpImg');
    document.getElementById('fiveUpImg').src = 'assets/img/fiveUpp.SVG';
    //save button
    createNewElement('div', '.secondLine', null, ['saveDiv', 'toSumm', 'options', 'd-grid', 'col-12']);
    createNewElement('button', '.saveDiv', 'save', ['btn', 'btn-primary'], 'Save');
    //reset button
    createNewElement('div', '.secondLine', null, ['resetDiv', 'toSumm', 'options', 'd-grid', 'col-12']);
    createNewElement('button', '.resetDiv', 'reset', ['btn', 'btn-primary'], 'Reset');

    //aggiungo un listener al div wrapper che ha il compito di selezionare, in base al pulsante cliccato, quale sarà il valore da assegnare alla var toAdd e la conseguente funzionalità da lanciare
    let result = 0;
    let ad = 0;

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
                clean();
                return;

            case 'save':
                if (!result == 0) {
                    ad++;
                    createNewElement('div', '.thirdLine', null, ['memRow', 'col-2'], result);
                }
                if (!result == 0 && ad == 2) {
                    const memo = document.getElementById('memo');
                    const summButton = document.createElement('button');
                    summButton.setAttribute('class', 'btn btn-primary');
                    summButton.setAttribute('id', 'totSumm');
                    // summButton.addEventListener('click', total);
                    const summButtonText = document.createTextNode('Fai la Somma');
                    summButton.appendChild(summButtonText);
                    memo.prepend(summButton);
                }
                reset();
                return;

            case 'totSumm':
                reset();
                let totalNum = 0;
                toTotal = Array.from(document.getElementsByClassName('memRow'));
                for (i = 0; i < toTotal.length; i++) {
                    totalNum = totalNum + Number(toTotal[i].innerText);
                }
                displayInner(totalNum);
                clean();
                ad = 0;
                return;
        };

        result += toAdd;
        displayInner(result);
    }

    //la funzione 'createNewElement' crea un nuovo elemento e lo appende al genitore
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

    //la funzione 'displayInner' è dedicata a visualizzare il risultato nel display dell'applicazione
    function displayInner(disp) {
        const display = document.getElementById('display');
        display.innerHTML = `<p>${disp}</p>`;
    }

    //la funzione 'reset' azzera il display dell'applicazione
    function reset() {
        result = 0;
        displayInner(result);
    }

    //la funzione 'clean' elimina gli elementi salvati in memoria ed il pulsante di somma 
    function clean() {
        toDelete = Array.from(document.getElementsByClassName('memRow'));
        for (i = 0; i < toDelete.length; i++) {
            toDelete[i].remove();
        }
        toDeleteBtn = document.getElementById('totSumm');
        toDeleteBtn ? toDeleteBtn.remove() : null;
    } 
});