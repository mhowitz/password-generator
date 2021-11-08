// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  
}
//choose length in between 8 and 128 characters
//character types: lowercase, uppercase, numeric, and/or special characters
//at least one character type should be validated once all prompts are answered
//a password is generated that matches selected criteria
//the passwor is either displayed in alert or written to the page 
/*
*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
