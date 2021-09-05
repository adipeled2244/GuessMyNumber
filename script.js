'use strict';

let secretNumber = Math.trunc(Math.random() * 20); + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;

}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // no input
    if (!guess) {
        document.querySelector('.message').textContent = 'no Number';
        // player win
    } else if (guess === secretNumber) {

        displayMessage('Correct number!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '40rem';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            console.log(score, highScore);
            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : '  Too low');

            score--;
            document.querySelector('.score').textContent = score;
        } else {

            displayMessage('You lost the game ! :(!');
            document.querySelector('.score').textContent = 0;
        }
        // guess too high

    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20); + 1;
    displayMessage(' Start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '   rgb(150, 200, 204)';
    document.querySelector('.number').style.width = '100px';
});