window.addEventListener('DOMContentLoaded', function() {


    let oneDown = document.getElementById ('oneDown');
    let fiveDown = document.getElementById ('fiveDown');
    let oneUp = document.getElementById ('oneUp');
    let fiveUp = document.getElementById ('fiveUp');
    let display = document.getElementById('display');
    let resetB = document.getElementById('reset');
    let result = 0;
   
    
    function somma_1 () {
        result = result -1 ;
        display.innerHTML= result;
    };

    function somma_5 () {
        result = result - 5;
        display.innerHTML= result;
    };

    function somma1 () {
        result = result +1;
        display.innerHTML= result;
    };

    function somma5 () {
        result = result + 5;
        display.innerHTML= result;
    };

    function reset () {
        result=0
        display.innerHTML= result;
    }

    oneDown.addEventListener('click', somma_1);
    fiveDown.addEventListener('click', somma_5);
    oneUp.addEventListener('click', somma1);
    fiveUp.addEventListener('click', somma5);
    resetB.addEventListener('click', reset);
    





});