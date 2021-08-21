// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for potential password characters
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["123456789"];
var specChars = ["!@#$%&*()"]



function generatePassword(){
  // WHEN prompted for the length of the password
  var length = prompt("Enter password length");
    // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (length > 8 && length < 128) {
       var lowerCaseOpt = confirm("Include lowercase letters?");
       var upperCaseOpt = confirm("Include uppercase letters?");
       var numbersOpt = confirm("Include numbers?");
       var specCharsOpt = confirm("Include special characters?");
  }
     else if (length < 8 && length > 128){
            return alert("Invalid.  Please choose a password length greater than 8 characters and fewer than 128 characters.");
       };

  console.log(parseInt(length))
  console.log(typeof parseInt(length)) 
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  
  return "test"
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