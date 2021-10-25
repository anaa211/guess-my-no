'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = '15';
// document.querySelector('.score').textContent = '10!';

// document.querySelector('.guess').value = 23;

let secretNumber;
let score;

const setValues = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

setValues();
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBgdClr = function (bgdcolor) {
  document.querySelector('body').style.backgroundColor = bgdcolor;
};

const changeNoWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMsg('No Number!');
  } else if (guess === secretNumber) {
    displayMsg('Correct Number!');
    displayNumber(secretNumber);
    changeBgdClr('#60b347');
    changeNoWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? 'Too high!' : 'Too low!');
      // document.querySelector('.message').textContent = 'Too high!';
      score--;
      setScore(score);
    } else {
      displayMsg('You lost the game!');
      setScore(0);
    }
  }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  setValues();
  document.querySelector('.guess').value = null;
  setScore(score);
  displayNumber('?');
  displayMsg('Start guessing...');
  changeBgdClr('#222');
  changeNoWidth('15rem');
});
