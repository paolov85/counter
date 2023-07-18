window.addEventListener('DOMContentLoaded', function() {


    let oneDown = document.getElementById ('oneDown');
    let fiveDown = document.getElementById ('fiveDown');
    let oneUp = document.getElementById ('oneUp');
    let fiveUp = document.getElementById ('fiveUp');
    let display = document.getElementById('display');
    let resetB = document.getElementById('reset');
    let result = 0;
   
    switch (this.document.getElementById()) {

        case oneDown :
            toAdd = -1;
            break;
            
        case fiveDown :
            toAdd = -5;
            break;

        case oneUp :
            toAdd = 1;
            break;

        case fiveUp :
            toAdd = 5;
            break;

    }

    
    function somma (toAdd) {
        result = result + 1;
        display.innerHTML= result;
    };

    oneUp.addEventListener('click', somma);
    





});