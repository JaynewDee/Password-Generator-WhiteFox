// Assignment Code
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


function generatePassword(){
  
  var length = prompt("Enter password length");
  if (!length){
       return;
  }
  if (length >= 8 && length <= 128) {
       var lowerCaseOpt = confirm("Include lowercase letters?");
       var upperCaseOpt = confirm("Include uppercase letters?");
       var numbersOpt = confirm("Include numbers?");
       var specCharsOpt = confirm("Include special characters?");
  } else if (length < 8 || length > 128){
          alert("Invalid.  Please choose a password length greater than 7 characters and fewer than 129 characters.");
          generatePassword();
       };

  if (lowerCaseOpt === false && upperCaseOpt === false && numbersOpt === false && specCharsOpt === false) {
     alert("Invalid. Please choose at least one character type.");
     generatePassword();
  };
  
  if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === true) {
     var userPassword = "";
       var i = 0;
       for (i = 0; i < length;){
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
     };
     }
  else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     for (i = 0; i < length;){
          lowerCaseOption();
          upperCaseOption();
          numbersOption();
     }}
  else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === false && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     for (i = 0; i < length;){
          lowerCaseOption();
          upperCaseOption();
     }}
  else if (lowerCaseOpt === true && upperCaseOpt === false && numbersOpt === false && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     for (i = 0; i < length;){
          lowerCaseOption();
     }}
  else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     }
  else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     }
  else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     }
  else if (lowerCaseOpt === true && upperCaseOpt === true && numbersOpt === true && specCharsOpt === false) {
     var userPassword = "";
     var i = 0;
     }



if (userPassword.length != length) {
     userPassword = userPassword.slice((userPassword.length) - length);
};

  
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  // WHEN the password is generated
  var password = generatePassword();
  // THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function Declarations


function lowerCaseOption() {
     var userPassword = "";
     var i = 0;
     var randomIndex = Math.floor(Math.random() * lowerCaseIndex.length);
          var indexChar = lowerCaseIndex[randomIndex];
          var userPassword = userPassword.concat(indexChar);
          i++;
}

function upperCaseOption() {
     var userPassword = "";
     var i = 0;
     var randomIndex = Math.floor(Math.random() * upperCaseIndex.length);
          var indexChar = upperCaseIndex[randomIndex];
          var userPassword = userPassword.concat(indexChar);
          i++;
}

function numbersOption() {
     var userPassword = "";
     var i = 0;
     var randomIndex = Math.floor(Math.random() * numbersIndex.length);
          var indexChar = numbersIndex[randomIndex];
          var userPassword = userPassword.concat(indexChar);
          i++;
}

function specCharsOption() {
     var userPassword = "";
     var i = 0;
     var randomIndex = Math.floor(Math.random() * specCharsIndex.length);
          var indexChar = specCharsIndex[randomIndex];
          var userPassword = userPassword.concat(indexChar);
          i++;
}