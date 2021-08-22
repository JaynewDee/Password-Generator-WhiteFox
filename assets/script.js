
var generateBtn = document.querySelector("#generate");

// Arrays for potential password characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var specChars = "!@#$%&*()";

lowerCaseIndex = lowerCase.split('');
upperCaseIndex = upperCase.split('');
numbersIndex = numbers.split('');
specCharsIndex = specChars.split('');

// Function called when writePassword function is called, following button click
function generatePassword() {
     // Asks user for desired password length
     var length = prompt("Enter password length");
     // Stops function execution if no nothing is input into prompt
     if (!length) {
          return;
     }
     // Check user input to ensure selection is between 7 and 129 characters
     if (length >= 8 && length <= 128) {
          var lowerCaseOpt = confirm("Include lowercase letters?");
          var upperCaseOpt = confirm("Include uppercase letters?");
          var numbersOpt = confirm("Include numbers?");
          var specCharsOpt = confirm("Include special characters?");
     // displays "Invalid" error message if user inputs a number outside of necessary range
     } else if (length < 8 || length > 128) {
          alert("Invalid.  Please choose a password length greater than 7 characters and fewer than 129 characters.");
          generatePassword();
     };
     // displays "Invalid" error message if user chooses against all character types
     if (lowerCaseOpt === false && upperCaseOpt === false && numbersOpt === false && specCharsOpt === false) {
          alert("Invalid. Please choose at least one character type.");
          generatePassword();
     };
     // Statements below randomly select characters from arrays according to character options chosen by user
     if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === false && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === false && numbersOpt === false && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === true && numbersOpt === false && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === false && numbersOpt === true && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === false && numbersOpt === false && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === false && numbersOpt === true && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === false && numbersOpt === false && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === true && numbersOpt === false && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === false && numbersOpt === true && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === true && numbersOpt === true && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === false && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === false && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
               var indexChar = upperCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     } else if (lowerCaseOpt === true && upperCaseOpt === false && numbersOpt === true && specCharsOpt === true) {
          var userPassword = "";
          var i = 0;
          for (i = 0; i < length;) {
               var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
               var indexChar = lowerCaseIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * numbersIndex.length);
               var indexChar = numbersIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
               var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
               var indexChar = specCharsIndex[randomIndex];
               var userPassword = userPassword.concat(indexChar);
               i++;
          }
     }
          // Reduces password string to user's desired length if for loops exceed character request
          if (userPassword.length != length) {
               userPassword = userPassword.slice((userPassword.length) - length);
          };
          // Enhances password security by shuffling userPassword string to increase randomness
          var shuffledPassword = userPassword.split('').sort(function(){return 0.5-Math.random()}).join('') ;
          return shuffledPassword;
}

     // Function called when button clicked
     function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");
          passwordText.value = password;

     }
     generateBtn.addEventListener("click", writePassword);
