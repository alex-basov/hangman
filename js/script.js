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

const wordOutput = document.querySelector('#the-word');
const remainingLettersOutput = document.querySelector('#remaining-letters');
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
console.log('remaining letters: ' + remainingLetters);
wordOutput.innerHTML = answerArray.join(' ');
// the game loo

submitBtn.onclick = () => {

  let guess = letterInput.value.toLowerCase().trim();
  messageOutput.innerHTML = 'Guess a letter';
  console.log('Guess:' + guess);
  if (guess === '') {
    messageOutput.innerHTML = 'enter something?';
  } else if (guess.length !== 1) {
    messageOutput.innerHTML = 'Enter only one letter, please';
  } else {
    for (let i = 0; i < word.length; i++) {
      if (guess === answerArray[i]) {
        break;
      } else if (word[i] === guess) {
        answerArray[i] = guess;
        wordOutput.innerHTML = answerArray.join(' ');
        remainingLetters--;
        letterInput.value = '';
        console.log('remaining letters: ' + remainingLetters);
      }
    }
    if (remainingLetters <= 0) {
      messageOutput.innerHTML = 'You have won!';
    }
  }
};
