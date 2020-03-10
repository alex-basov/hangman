console.clear();

// words constants
let words = [
  'minute',
  'ocean',
  'destruction',
  'position',
  'dinosaurs',
  'crayon',
  'sticks',
  'carpenter',
  'riddle',
  'cart',
  'crate',
  'rifle',
  'payment',
  'measure',
  'purpose',
  'humor',
  'food',
  'run',
  'loaf',
  'snails',
  'berry',
  'profit',
  'cup',
  'winter',
  'linen',
  'street',
  'drain',
  'kiss',
  'insect',
  'toy',
  'rabbits',
  'rail',
  'insurance',
  'grandmother',
  'jeans',
  'art',
  'cast',
  'example',
  'seat',
  'wilderness',
  'cloth',
  'end',
  'blade',
  'copper',
  'growth',
  'home',
  'spring',
  'coat',
  'sea',
];

// DOM constants
const wordOutput = document.querySelector('#the-word');
const remainingLettersOutput = document.querySelector('#remaining-letters span');
const wrongAnswersCountOutput = document.querySelector('#wrong-answers span');
const wrongLettersOutput = document.querySelector('#wrong-letters span');
const messageOutput = document.querySelector('#message');
const letterInput = document.querySelector('#letter-input');
const submitBtn = document.querySelector('#submit-btn');
const startGameBtn = document.querySelector('#start-game');
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Game variables
let gameStarted = false;
let gameOver = false;
let playerWon = false;
let word;
let answerArray = [];
let remainingLetters;
let wrongLetters = [];
let maxWrongLetters = 10;
let wrongLettersCount = 0;

gameInit();

submitBtn.addEventListener('click', () => {
  let guess = letterInput.value.toLowerCase().trim();
  guess = validateGuess(guess);
  console.log('Guess:' + guess);
  if (!guess) return;

  if(word.indexOf(guess) === -1 && wrongLetters.indexOf(guess) === -1)  {
    wrongLetters.push(guess);
    wrongLettersCount = wrongLetters.length;
    wrongAnswersCountOutput.textContent = wrongLettersCount.toString();
    console.log('wrong letters: ' + wrongLetters);
    showMessage(`Wrong letter! you've got ${maxWrongLetters - wrongLettersCount} more tries`);
  }

  for (let i = 0; i < word.length; i++) {
    if (guess === answerArray[i]) {
      break;
    } else if (word[i] === guess) {
      answerArray[i] = guess;
      wordOutput.textContent = answerArray.join(' ');
      remainingLetters--;
      remainingLettersOutput.textContent = remainingLetters.toString();
    }
  }
  checkRemainingLetters(remainingLetters);
  wrongLettersOutput.textContent = wrongLetters.join(' | ');
  clearInputValues();
  console.log(remainingLetters);
  checkIfLost(wrongLettersCount);
  letterInput.focus();
});


function gameInit() {
  hideElement(startGameBtn);
  word = getRandomWord(words);
  showLetterPlaceholders();
  remainingLetters = word.length;
  showTheRemainingLettersToGuess(remainingLetters);
  letterInput.focus();
  messageOutput.textContent = 'Guess a letter';
}

function getRandomWord(wordsArray){
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
}

function showLetterPlaceholders() {
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  wordOutput.textContent = answerArray.join(' ');
}

function showTheRemainingLettersToGuess(number) {
  remainingLettersOutput.textContent = number.toString();
}

function showMessage(text) {
  messageOutput.textContent = text;
}

function hideElement(...elements) {
  elements.forEach(element => (element.style.display = 'none'));
}

function showElement(...elements) {
  elements.forEach(element => (element.style.display = 'unset'));
}

function validateGuess(guess) {
  if (guess === '') {
    showMessage('Please enter something');
    return false;
  } else if (guess.length !== 1) {
    showMessage('Enter only one letter, please');
    clearInputValues();
    return false;
  } else {
    return guess;
  }
}

function checkRemainingLetters(remainingLetters) {
  if (remainingLetters <= 0) {
    showMessage('You have won!');
  }
}

function clearInputValues() {
  letterInput.value = '';
}

function checkIfLost(number) {
  if (number >= maxWrongLetters) {
    showMessage(`Too many tries... You've lost`);
    gameOver = true;
    endGame()
  }
}

function endGame() {
  showElement(startGameBtn);
  letterInput.disabled = true;
  submitBtn.disabled = true;
}
