let arrayOfWords = new Array();
let wordIndex = 0;
function saveWord(event) {
  event.preventDefault();
  let found = 0;
  let currentWord = document.getElementById("textInput").value;
  for (let i = 0; i < wordIndex; ++i) {
    if (currentWord == arrayOfWords[i]) {
      found = 1;
      break;
    }
  }
  if (found == 0) {
    arrayOfWords[wordIndex++] = currentWord;
  }
}

function searchWord(event) {
  let searchedWord = document.getElementById("textInput").value;
  event.preventDefault();
  for (let i = 0; i <= wordIndex; ++i) {
    if (arrayOfWords.indexOf(searchedWord) >= 0) {
      alert("This word exists in dictionary");
      break;
    } else {
      alert("This word doesn't exist in dictionary");
      break;
    } 
  }
}
