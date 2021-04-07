'use strict';

function _(e){
    return document.getElementById(e);
}

const myYear = new Date().getFullYear();
let zaria = document.querySelectorAll('.zari');
let firstZari = zaria[0];
let secondZari = zaria[1];

function rollNums(){
    return Math.floor(Math.random() * 6) + 1;
}

function roll(e){
    let allActive = e.querySelectorAll('[data-num]');
    for(let i = 0; i < allActive.length; i++){
        allActive[i].classList.remove('active');
    }
    let allPoints = [];
    let num = rollNums();

    switch(num){
        case 1:
            allPoints = ['b2'];
            break;
        case 2:
            allPoints = ['a1', 'c3'];
            break;
        case 3:
            allPoints = ['a1', 'b2', 'c3'];
            break;
        case 4:
            allPoints = ['a1', 'a3', 'c1', 'c3'];
            break;
        case 5:
            allPoints = ['a1', 'a3', 'b2', 'c1', 'c3'];
            break;
        case 6:
            allPoints = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
            break;
        default:
            allPoints = ['b2'];
    }

    allPoints.forEach(setActive);
    // let point = e.querySelector('[data-num="b2"]');
    function setActive(item){
        let point = e.querySelector(`[data-num="${item}"]`);
        point.classList.add('active');
    }
}

_('roll').addEventListener('click', () => {
    roll(firstZari);
    roll(secondZari);
})

roll(firstZari);
roll(secondZari);
_('copy').innerText = (myYear -2) + '-' + (myYear + 2);
