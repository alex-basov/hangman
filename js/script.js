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
const letterInput = document.querySelector('#letter-input');
const messageOutput = document.querySelector('#message');
const submitBtn = document.querySelector('#submit-btn');

// choose random word;
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let wrongLetters = 0;
let isWinner;

// answer array
let answerArray = [];
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

  for (let i = 0; i < word.length; i++) {
    console.log('works');
    if (guess === answerArray[i]) {
      break;
    } else if (word[i] === guess) {
      answerArray[i] = guess;
      wordOutput.textContent = answerArray.join(' ');
      remainingLetters--;
      letterInput.value = '';
      remainingLettersOutput.textContent = remainingLetters.toString();
    }
  }
  checkRemainingLetters(remainingLetters);
};

function validateGuess(guess) {
  if (guess === '') {
    messageOutput.textContent = 'Please enter something';
    return false;
  } else if (guess.length !== 1) {
    messageOutput.textContent = 'Enter only one letter, please';
    return false;
  } else {
    return guess;
  }
}

function checkRemainingLetters(remainingLetters) {
  if (remainingLetters <= 0) {
    messageOutput.textContent = 'You have won!';
  }
}

