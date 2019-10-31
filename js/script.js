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
let win;

// answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;
console.log('remaining letters: ' +  remainingLetters);
// the game loo


while (remainingLetters > 0 && wrongLetters < 2) {
  alert(answerArray.join(' '));
  // ask for a letter
  let guess = prompt('Guess a letter or click Cancel button to stop the game');
  guess = guess.toLowerCase();

  if (guess === null) {
    break
  } else if (guess.length !== 1) {
    alert('Enter only one letter, please');
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        remainingLetters--;
      }
    }
  }
  if (remainingLetters === 0) {
    win = true;
  }

console.log('wrong letters: ' + wrongLetters);
}

if (win === true) {
// congrat and show the word
  alert(answerArray.join(' '));
  alert('Great! The word was: ' + word);
} else if (win === false){
  alert('You have lost! The word was: ' + word);

}

