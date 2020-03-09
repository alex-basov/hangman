// set the words array
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

// interface elements
const wordOutput = document.querySelector('#the-word');
const remainingLettersOutput = document.querySelector('#remaining-letters span');
const wrongAnswersOutput = document.querySelector('#wrong-answers span');
const wrongLettersOutput = document.querySelector('#wrong-letters span');
const letterInput = document.querySelector('#letter-input');
const messageOutput = document.querySelector('#message');
const submitBtn = document.querySelector('#submit-btn');
const startGameBtn = document.querySelector('#start-game');
const form = document.querySelector('form');

// choose random word;
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let wrongLetters = [];
let maxWrongAnswers = 10;
let wrongAnswersCount = 0;
let gameOver = false;

form.addEventListener("submit", (e) => {
 e.preventDefault();
});
letterInput.focus();

// answer array
let answerArray = [];
wrongLettersArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;
remainingLettersOutput.textContent = remainingLetters.toString();
wordOutput.textContent = answerArray.join(' ');
messageOutput.textContent = 'Guess a letter';

submitBtn.onclick = () => {
  let guess = letterInput.value.toLowerCase().trim();
  guess = validateGuess(guess);
  console.log('Guess:' + guess);
  if (!guess) return;

  if(word.indexOf(guess) === -1 && wrongLetters.indexOf(guess) === -1)  {
    wrongLetters.push(guess);
    wrongAnswersCount = wrongLetters.length;
    wrongAnswersOutput.textContent = wrongAnswersCount.toString();
    console.log('wrong letters: ' + wrongLetters);
    messageOutput.textContent = `Wrong letter! you've got ${maxWrongAnswers - wrongAnswersCount} more tries`;
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
  checkMaxWrongAnswers(wrongAnswersCount);
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
  if (wrongAnswersCount >= maxWrongAnswers) {
    messageOutput.textContent = `Too many tries... You've lost`;
    gameOver = true;
    endGame()
  }
}

function endGame() {
  startGameBtn.classList.toggle('hidden');
  letterInput.disabled = true;
  submitBtn.disabled = true;
}