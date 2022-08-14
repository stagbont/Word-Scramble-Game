const wordTest = document.querySelector(".word");
const wordHint = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const refreshWord = document.querySelector(".refresh-word");
const checkWord = document.querySelector(".check-word");


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
      console.log(wordArray, randomObj.word, randomObj.hint); 
} 
initGame();

// listen for a click on the refresh word button
refreshWord.addEventListener('click', initGame);
checkWord.addEventListener('click', checkWord);