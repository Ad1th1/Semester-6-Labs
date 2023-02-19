// Get the input element and the output elements from the HTML document
const inputElement = document.getElementById('phone-number');
const areaCodeElement = document.getElementById('area-code');
const phoneNumberElement = document.getElementById('phone-number-only');

// Add an event listener to the form to handle the submit event
const formElement = document.getElementById('phone-number-form');
formElement.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the phone number from the input element
  const phoneNumber = inputElement.value;

  // Use split to extract the area code and last seven digits
  const [_, areaCode, phoneNumberOnly] = phoneNumber.split(/[\(\)\-\s]/);

  // Update the area code and phone number elements
  areaCodeElement.value = areaCode;
  phoneNumberElement.value = phoneNumberOnly;
  
  // Clear the input element
  inputElement.value = '';
});
