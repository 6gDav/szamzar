document.addEventListener('DOMContentLoaded', function() {
  let code = '';

  function addNumber(number) {
    code += number;
    document.getElementById('code').value = code;
  }

  function submitCode() {
    const enteredCode = code;

    if (enteredCode === '1234') {
      displayMessage('Helyes kód!');
    } else {
      displayMessage('Hibás kód!');
    }

    code = '';
    document.getElementById('code').value = '';
  }

  function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }

  const numberButtons = document.getElementsByClassName('button');
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(event) {
      const number = event.target.textContent;
      addNumber(number);
    });
  }
});
