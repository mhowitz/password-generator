
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//assigning variables to different characters
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbol =  '!@#$%^&*.+=-_';
var num = '0123456789';
var passForm = document.querySelector('#pass-length');

generateBtn.addEventListener("click", writePassword);


var generatePassword = function () {
  //ask the user how many characters they want in their password
  var passLength = document.querySelector("input[name='passLength']").value;
  if (passLength < 7 || passLength > 129 || passLength === "") {
    return "Please enter a number between 8 and 128.";
  };
  console.log(passLength);

  //set the password to empty before prompts are asked
  var initialPassword = '';

  //prompts that ask what characters they would like in their password
  var lowerConfirm = window.confirm("Would you like lowercase letters in your password?");
  if (lowerConfirm) {
    // the += means that if the prompt is confirmed that lowercase letters are true and will be added to the password
    initialPassword += lower;
    console.log("lower yes!");
  }
  var upperConfirm = window.confirm("Would you like uppercase letters in your password?");
  if (upperConfirm) {
    initialPassword += upper;
    console.log("upper yes");
  };

  var numConfirm = window.confirm("Would you like numbers in your password?");
  if (numConfirm) {
    initialPassword += num;
    console.log("number yes");
  }
  var symbolConfirm = window.confirm("Would you like symbols in your password?");
  if (symbolConfirm) {
    initialPassword += symbol;
    console.log("symbol yes");
  }
  if(!lowerConfirm && !upperConfirm && !numConfirm && !symbolConfirm) {
    alert("You need to select at least one character to create a valid password!");
    return "Try again!";
  }

  password = "";

  for (var i = 0; i < passLength; i++) {
    randomPass = Math.floor(Math.random()* initialPassword.length);
    password += initialPassword[randomPass];
  }
  console.log(password);
  return password;
};






