// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

///Step 1 : find out with prompt what does the user want to include in their password and validate each choice with an alert
//          Prompt: "password length (min 8, max 128)"
//          Alert: "password will be *** long"
// If the user enters a number 8> or >128 - prompt again with red font

// Other promtps :  Include Numbers ?
//                  Include Uppercase ?
//                  Include Lowercase ?
//                  Include Special Characters ?
//  If "OK" : alert "password will include ***" 
//If "CANCEL" :  alert " password will not include ***"

//Step 2 : generate the password with the info collected in Step 1
// can use "if statements"
// if (number) select a random number from the number-array else // move on to check if  next condition is met //

//Step 3: display the password generated that is stored in the variable created in Stpe 2. 

// We need an event listerner to call the function when the button is clicked



//var selectpasswordLength = prompt("Enter password length - 8 to 128 characters.");
  
  let selectpasswordLength;

  function getPasswordOptions() {
    //selectpasswordLength = prompt("Enter password length - 8 to 128 characters.");

    // keep prompting the user to enter a number between8 and 128 untile they do. Once they odo, we can move to the next prompt
    while (selectpasswordLength < 8 || selectpasswordLength > 128) {
      selectpasswordLength = parseInt(prompt("Enter password length - 8 to 128 characters."));
      alert("Enter password length - 8 to 128 characters.");
      
      // Prompt the user again to enter a valid password length

      selectpasswordLength = prompt("Enter password length - 8 to 128 characters.");
    }
      //selectpasswordLength = prompt("Enter password length - 8 to 128 characters.");

    var takesLowercase = prompt("Include lowercase?"); 
    var takesUppercase = prompt("Include uppercase?"); 
    var takesNumber = prompt("Include numbers?"); 
    var takesSpecialCharacters = prompt("Include special characters?"); 
  }
  
  getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
console.log("password button clicked ")

return "Generated password field";
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);