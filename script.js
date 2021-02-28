'use strict';

//selecting elements
const buttonRoll = document.querySelector('.btn--roll');
const buttonNewGame = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
const player0CurrentScore = document.querySelector('#current--0');
const player1CurrentScore = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');
//


initGame();

function roll() {
    const number = Math.trunc((Math.random() * 6) + 1);
    return number;
}
function buttonRollListener() {
    const rolledNumber = roll();
    showRolledDice(rolledNumber);
    player0CurrentScore.textContent = rolledNumber;
}

function buttonHoldListener() {
    
}

function showRolledDice(number){
    console.log(number);
    if(diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
    diceImg.src = `dice-${number}.png`;
}

function initGame() {
    diceImg.classList.add('hidden');
    player0Score.textContent = '0';
    player1Score.textContent = '0';
    player0CurrentScore.textContent = '0';
    player1CurrentScore.textContent = '0';
}

// listeners
buttonRoll.addEventListener('click', buttonRollListener);
buttonHold.addEventListener('click', buttonHoldListener);
