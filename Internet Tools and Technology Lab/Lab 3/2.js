function toPigLatin(englishPhrase) {
    // Split the English phrase into an array of words
    const englishWords = englishPhrase.split(' ');
  
    // Loop through each word and translate it to pig Latin
    const pigLatinWords = englishWords.map((word) => {
      // Separate the first letter from the rest of the word
      const firstLetter = word.charAt(0);
      const restOfWord = word.slice(1);
  
      // Build the pig Latin word by combining the rest of the word,
      // the first letter, and the "ay" suffix
      const pigLatinWord = restOfWord + firstLetter + 'ay';
  
      return pigLatinWord;
    });
  
    // Join the pig Latin words back into a sentence
    const pigLatinPhrase = pigLatinWords.join(' ');
  
    return pigLatinPhrase;
  }
  
  // Get the input element and the output element from the HTML document
  const inputElement = document.getElementById('english-phrase');
  const outputElement = document.getElementById('pig-latin-phrase');
  
  // Add an event listener to the form to handle the submit event
  const formElement = document.getElementById('translate-form');
  formElement.addEventListener('submit', (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Get the English phrase from the input element
    const englishPhrase = inputElement.value;
  
    // Convert the English phrase to pig Latin
    const pigLatinPhrase = toPigLatin(englishPhrase);
  
    // Append the pig Latin phrase to the output element
    outputElement.value += pigLatinPhrase + '\n';
  
    // Clear the input element
    inputElement.value = '';
  });
  
