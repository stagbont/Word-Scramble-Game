const wordTest = document.querySelector(".word");
const wordHint = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const refreshWord = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord;


const initGame = () => {
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
      console.log(wordArray, randomObj.word, randomObj.hint); 
} 
initGame();

const checkWord = () => {
      let userWord = inputField.value.toLocaleLowerCase(); // getting user value
      if(!userWord) return alert("please enter a word to check"); // if user didn't enter anything

      // if user word doesn't match with the correct word
      if (userWord !== correctWord) return alert(`Oops! ${userWord} is not correct word`);

      // if above two conditions fails, then show congrats alert because user word is correct
      alert(`Congrats! ${correctWord.toUpperCase()} is a correct word`);
}

// listen for a click on the refresh word button
refreshWord.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);