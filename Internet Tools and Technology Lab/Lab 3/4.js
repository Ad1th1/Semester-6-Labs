// Get the input element and the output element from the HTML document
const inputElement = document.getElementById('five-letter-word');
const outputElement = document.getElementById('three-letter-words');

// Add an event listener to the form to handle the submit event
const formElement = document.getElementById('word-form');
formElement.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the five-letter word from the input element
  const word = inputElement.value.toLowerCase();

  // Generate all possible three-letter words using a nested loop
  const threeLetterWords = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (i !== j && i !== k && j !== k) {
          const threeLetterWord = word[i] + word[j] + word[k];
          threeLetterWords.push(threeLetterWord);
        }
      }
    }
  }

  // Sort the three-letter words in alphabetical order
  threeLetterWords.sort();

  // Display the three-letter words in the output element
  outputElement.value = threeLetterWords.join('\n');
  
  // Clear the input element
  inputElement.value = '';
});
