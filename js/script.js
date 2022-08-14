const container = document.querySelector('.container');
const wordTest = document.querySelector(".word");
const wordHint = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshWord = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
// Modal section
const modalContainer = document.querySelector('.modal');
const alert = document.querySelector('.alert');
const closeModal = document.querySelector('#close-btn');
const nextWordBtn = document.querySelector('.modal__button');

let correctWord, timer;


const initTimer = maxTime => {
      timer = setInterval(() => {
            if(maxTime > 0) {
                  maxTime--; // decrement maxTime by -1
                  return timeText.innerText = maxTime;
            }
            clearInterval(timer);
            alert.innerText = 'Time up: ' + correctWord.toUpperCase() + ' is the correct word';
      }, 1000);
}

const initGame = () => {
      initTimer(30); // calling the timer function with passing 30 as maxTime value
      let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
      let wordArray = randomObj.word.split(""); // splitting each letter of random word
      for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i + 1); // getting random number

            // shuffling and swiping wordArray letters randomly
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

            // OR

            // let temp = wordArray[i];
            // wordArray[i] = wordArray[j];
            // wordArray[j] = temp;
      }
      wordTest.innerText = wordArray.join(""); // passing shuffled word as word text
      wordHint.innerText = randomObj.hint; // passing Hint sentence as hint
      correctWord = randomObj.word.toLowerCase(); // passing random word to correctWord
      inputField.value = null;
      inputField.setAttribute("maxlength", correctWord.length);
      alert.innerText = '';
      console.log(wordArray, randomObj.word, randomObj.hint); 
} 
initGame();

const checkWord = () => {

      let userWord = inputField.value.toLocaleLowerCase(); // getting user value
      if(!userWord) {
            alert.innerText = 'Please enter a word'; // if user didn't enter anything
      }

      // if user word doesn't match with the correct word
      if (userWord !== correctWord) {
            alert.innerText = 'Try again: Your word is incorrect';
      } else {
            // if above two conditions fails, then show congrats alert because user word is correct
           modalContainer.classList.add('show-modal');
           
           if(closeModal) {
              closeModal.addEventListener('click', () => {
                  modalContainer.classList.remove('show-modal');
              });
           }

           if(nextWordBtn) {
            nextWordBtn.addEventListener('click', () => {
                  initGame();
                  modalContainer.classList.remove('show-modal');
            });
           }
      }
}

// listen for a click on the refresh word button
refreshWord.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);