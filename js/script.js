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

// Game variables
let gameStarted = false;
let gameOver = false;
let playerWon = false;
let wordToGuess = words[Math.floor(Math.random() * words.length)];
console.log(wordToGuess);
let wrongLetters = [];
let maxWrongLetters = 10;
let wrongLettersCount = 0;

letterInput.focus();
hideElement(startGameBtn);

form.addEventListener("submit", (e) => {
 e.preventDefault();
});

// answer array
let answerArray = [];
wrongLettersArray = [];
for (let i = 0; i < wordToGuess.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = wordToGuess.length;
remainingLettersOutput.textContent = remainingLetters.toString();
wordOutput.textContent = answerArray.join(' ');
messageOutput.textContent = 'Guess a letter';

submitBtn.onclick = () => {
  let guess = letterInput.value.toLowerCase().trim();
  guess = validateGuess(guess);
  console.log('Guess:' + guess);
  if (!guess) return;

  if(wordToGuess.indexOf(guess) === -1 && wrongLetters.indexOf(guess) === -1)  {
    wrongLetters.push(guess);
    wrongLettersCount = wrongLetters.length;
    wrongAnswersCountOutput.textContent = wrongLettersCount.toString();
    console.log('wrong letters: ' + wrongLetters);
    messageOutput.textContent = `Wrong letter! you've got ${maxWrongLetters - wrongLettersCount} more tries`;
  }

  for (let i = 0; i < wordToGuess.length; i++) {
    if (guess === answerArray[i]) {
      break;
    } else if (wordToGuess[i] === guess) {
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
  checkMaxWrongAnswers(wrongLettersCount);
};

function validateGuess(guess) {
  if (guess === '') {
    messageOutput.textContent = 'Please enter something';
    return false;
  } else if (guess.length !== 1) {
    messageOutput.textContent = 'Enter only one letter, please';
    clearInputValues();
    return false;
  } else{
    return guess;
  }
}

function checkRemainingLetters(remainingLetters) {
  if (remainingLetters <= 0) {
    messageOutput.textContent = 'You have won!';
  }
}

function clearInputValues() {
  letterInput.value = '';
  letterInput.focus();
}

function checkMaxWrongAnswers(number) {
  if (number >= maxWrongLetters) {
    messageOutput.textContent = `Too many tries... You've lost`;
    gameOver = true;
    endGame()
  }
}

function endGame() {
  showElement(startGameBtn);
  letterInput.disabled = true;
  submitBtn.disabled = true;
}

function hideElement(...elements) {
  elements.forEach(element => (element.style.display = 'none'));
}

function showElement(...elements) {
  elements.forEach(element => (element.style.display = 'unset'));
}