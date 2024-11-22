const arrayOfWords = [];

function saveWord(event) {
  event.preventDefault();
  const currentWord = document.getElementById("textInput").value;
  if (arrayOfWords.indexOf(currentWord) < 0) {
    arrayOfWords.push(currentWord);
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
