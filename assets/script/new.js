 //creazione struttura
    //main div
    createNewElement('main', 'body', null, ['container-sm', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center', 'pb-5'], null)
    //counter div
    createNewElement('div', 'main', null, ['counter', 'container', 'w-100', 'my-5', 'py-4'], null);
    //divCounter.style.height = "30vh";
    //first, second and third lines div
    createNewElement('div', '.counter', null, ['firstLine', 'row'], null);
    createNewElement('div', '.counter', null, ['secondLine', 'row'], null);
    createNewElement('div', '.counter', 'memo', ['thirdLine', 'row', 'm-3'], null);
    //divThirdLine.style.overflow = "auto";
    //display div
    createNewElement('div', '.firstLine', 'display', ['col-12', 'col-md-6', 'order-md-2', 'text-center', 'p-3'], null);
    createNewElement('p', '#display', null, null, '0');
    //decrease div
    createNewElement('div', '.firstLine', null, ['decrease', 'col-6', 'col-md-3', 'order-md-1'], null);
    createNewElement('button', '.decrease', 'oneDown', ['toSumm', 'btn', 'w-100'], null);
    createNewElement('img', '#oneDown', null, null, null);
        //btnOneDownImg.setAttribute('src', 'assets/img/down.SVG');
    createNewElement('button', '.decrease', 'fiveDown', ['toSumm', 'btn', 'w-100'], null);
    createNewElement('img', '#fiveDown', null, null, null);
        //btnOneDownImg.setAttribute('src', 'assets/img/fiveDownn.SVG');
    //increase div
    createNewElement('div', '.firstLine', null, ['increase', 'col-6', 'col-md-3', 'order-md-3'], null);
    createNewElement('button', '.increase', 'oneUp', ['toSumm', 'btn', 'w-100'], null);
    createNewElement('img', '#oneUp', null, null, null);
        //btnOneUpImg.setAttribute('src', 'assets/img/up.SVG');
    createNewElement('button', '.increase', 'fiveUp', ['toSumm', 'btn', 'w-100'], null);
    createNewElement('img', '#fiveUp', null, null, null);
        //btnOneDownImg.setAttribute('src', 'assets/img/fiveUpp.SVG');
    //save button
    createNewElement('div', '.secondLine', null, ['saveDiv', 'toSumm', 'options', 'd-grid', 'col-12']);
    createNewElement('button', '.saveDiv','save', ['btn', 'btn-primary'], 'Save');
    //reset button
    createNewElement('div', '.secondLine', null, ['resetDiv', 'toSumm', 'options', 'd-grid', 'col-12'], null);
    createNewElement('button', '.resetDiv', 'reset', ['btn', 'btn-primary'], 'Reset');