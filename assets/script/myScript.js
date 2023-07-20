window.addEventListener('DOMContentLoaded', function () {


    let toSumm = document.getElementsByClassName('toSumm');
    let display = document.getElementById('display');
    let result = 0;

    for (i = 0; i < toSumm.length; i++) {
        toSumm[i].addEventListener('click', somma)
    }

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

            case 'save':
                console.log(result)
                return;



        };

        result += toAdd;
        display.innerHTML = `<p>${result}</p>`;

    }


});