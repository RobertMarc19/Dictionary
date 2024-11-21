const arrayOfWords = [];
let wordIndex = 0;
function saveWord(event) {
  event.preventDefault();
  let found = 0;
  const currentWord = document.getElementById("textInput").value;
  if (arrayOfWords.indexOf(currentWord) >= 0) {
    found = 1;
  }
  if (found == 0) {
    arrayOfWords[wordIndex++] = currentWord;
  }
}

function searchWord(event) {
  const searchedWord = document.getElementById("textInput").value;
  event.preventDefault();
  if (arrayOfWords.indexOf(searchedWord) >= 0) {
    alert("This word exists in dictionary");
  } else {
    alert("This word doesn't exist in dictionary");
  }
}
