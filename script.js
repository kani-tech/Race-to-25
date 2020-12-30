'use strict';

// Selecting elements 
const score0El = document.querySelector('#score--0');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice')
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

function newGame() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    current0.textContent = currentScore
    current1.textContent = currentScore
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEL.classList.add('hidden');
}

newGame()

// Starting View
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden')

// Roll the dice
btnRollDice.addEventListener('click', rollDice)

function rollDice() {
    if (playing) {
        // Generate value between 1 - 6
        const roll = Math.trunc((Math.random() * 6) + 1);


        diceEL.classList.remove('hidden');

        diceEL.src = `dice-${roll}.png`

        if (roll == 1) {
            switchPlayer()

        } else {
            currentScore += roll
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }

}


btnHold.addEventListener('click', holdValue)

// Function for Hold button
function holdValue() {
    if (playing) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 25) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer()
        }
    }


}

// Function that switches the player 
function switchPlayer() {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
        document.querySelector
    }
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnNewGame.addEventListener('click', newGame)


