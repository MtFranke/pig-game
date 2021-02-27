'use strict';
const buttonRoll = document.querySelector('.btn--roll');
const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

dice.classList.add('hidden');
player0Score.textContent = '0';
player1Score.textContent = '0';

const roll = () => Math.trunc((Math.random() * 6) + 1);
function buttonRollListener(){
    console.log(roll());
}


// listeners
buttonRoll.addEventListener('click', buttonRollListener);
