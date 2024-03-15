
 const randomNumber = Math.floor(Math.random() * 10) + 1;
 let attempts = 0;

 function checkGuess() {
     const guess = parseInt(document.getElementById('input').value);
     const messageElement = document.getElementById('p1');

     if (guess < 1 || guess > 10) {
         messageElement.textContent = 'Please enter a valid number between 1 and 10.';
         return;
     }

     attempts++;

     if (guess === randomNumber) {
         messageElement.textContent = `Congratulations! You have guess the number ${randomNumber} correctly in ${attempts} attempts.`;
         disableInputAndButton();
     } else if (guess < randomNumber) {
         messageElement.textContent = 'Too low. Try again.';
     } else {
         messageElement.textContent = 'Too high. Try again.';
     }
 }

 function disableInputAndButton() {
     document.getElementById('input').disabled = true;
     document.querySelector('button').disabled = true;
 }