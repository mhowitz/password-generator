// Assignment Code
// Generator funcitons - http.net-comber.com/charset.html
window.alert("Welcome to the password generator!");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

passwordText = {
  lower: randomLower,
  upper: randomUpper,
  symbol: randomSymbol,
  number: randomNum
};


var generatePassword = function() {
//choose length in between 8 and 128 characters
//asking user to input the desired length of password
  var passLength = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128 characters.");
    if (passLength < 8 || passLength > 128 || passLength === "") {
      window.prompt("Please choose a number between 8 and 128.");
      generatePassword();
    };
  
  var lowerConfirm = window.confirm("Would you like lowercase letters in your password?");
    if(lowerConfirm) {
      randomLower();
    };

  var upperConfirm = window.confirm("Would you like uppercase letters in your password?");
    if(upperConfirm) {
      randomUpper();
    };
  
  var numConfirm = window.confirm("Would you like numbers in your password?");
    if(numConfirm) {
      randomNum();
    }
  var symbolConfirm = window.confirm("Would you like symbols in your password?");
    if(symbolConfirm) {
      randomSymbol();
    }

}
//character types: lowercase, uppercase, numeric, and/or special characters

//random lowercase letter
var randomLower = function() {
  return String.fromCharCode(Math.floor(Math.random()*26) +97);
  console.log(randomLower);
}
//random Uppercase letter
var randomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26) +65);
}
//random symbols 

var randomSymbol = function() {
  var symbols = "!@#$%^&*.+=-_";
  return symbols[Math.floor(Math.random()* symbols.length)];
}
var randomNum = function() {
  var numbers = '0123456789';
  return numbers[Math.floor(Math.random()*numbers.length)];
}



//at least one character type should be validated once all prompts are answered
//a password is generated that matches selected criteria
//the passwor is either displayed in alert or written to the page 
/*
*/


// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
