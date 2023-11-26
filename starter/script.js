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

let numbersInPassword = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'
]
///Step 1 : find out with prompt what does the user want to include in their password and validate each choice with an alert
//          Prompt: "password length (min 8, max 128)"
//          Alert: "password will be *** long"
// If the user enters a number 8> or >128 - prompt again

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
// all above functions will be nested in global generatePassword()

// FUNCTION: select password length


function generatePassword(){
  let passwordLength = 1; 

function selectpasswordLength() {
  passwordLength = prompt("Enter password length - 8 to 128 characters.");
  //make sure the user enter at least one character and number selected is between 8 and 128
  if (passwordLength === null) {
    alert("Enter password length - 8 to 128 characters."); 
    //ask for input again 
    return selectpasswordLength();

  } else {
    // check that the input is a number with isNaN() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    if (isNaN(passwordLength)) {
      alert("Enter a number between 8 and 128");
    }
    // checking the number is between 8 and 128 with nested if statements: https://www.thoughtco.com/javascript-making-decisions-2037427
      if (passwordLength < 8) {
        alert("Password length must be at least 8 characters.");
        return selectpasswordLength();
      }
      if (passwordLength > 128) {
        alert("Password length must be 128 characters maximum.");
        return selectpasswordLength();
      }
  }
  alert("Your password will be " + passwordLength + " characters long");
  
}

selectpasswordLength();

//function select characters types: 
let numInPassword;
let isSpecial;
let isUpper;
let isLower;

function selectCharacterTypes(){

  function includeNumbers() {
    numInPassword = prompt("Include numbers ?"); //user can click OK  or cancel
    //If "CANCEL" :  alert " password will not include ***"
    if (numInPassword === null) {
      alert("Your password will not contain numbers.");
      //  If "OK" : alert "password will include ***" .
    } else {
      alert("Your password will contain numbers. ");
    }
  } 

  includeNumbers();


  //FUNCTION : Include Uppercase ?
  function includeUpper() {
    isUpper = prompt("Include uppercase characters ?"); //user can click OK  or cancel
    //If "CANCEL" :  alert " password will not include ***"
    if (isUpper === null) {
      alert("Your password will not contain uppercase characters.");
      //  If "OK" : alert "password will include ***" .
    } else {
      alert("Your password will contain uppercase characterss. ");
    }
  } 

  includeUpper();


  //FUNCTION :  Include Lowercase ?
  
  function includeLower() {
    isLower = prompt("Include lowercase characters ?"); //user can click OK  or cancel
    //If "CANCEL" :  alert " password will not include ***"
    if (isLower === null) {
      alert("Your password will not contain lowercase characters .");
      //  If "OK" : alert "password will include ***" .
    } else {
      alert("Your password will contain lowercase characters . ")
    }
  } 

  includeLower();


  //FUNCTION : Include Special Characters ?
  
  function includeSpecial() {
    isSpecial = prompt("Include special  characters ?"); //user can click OK  or cancel
    //If "CANCEL" :  alert " password will not include ***"
    if (isSpecial === null) {
      alert("Your password will not contain special characters.");
      //  If "OK" : alert "password will include ***" .
    } else {

      alert("Your password will contain special characters. ")
    }
  } 
  includeSpecial();

  //check that at keast one character type has been selected.
  if (numInPassword === null && isLower === null && isUpper === null && isSpecial === null){
    alert("Select at least one type of character");
    return selectCharacterTypes();
  } 
}

selectCharacterTypes();

let generatedPassword ="";
let characterList = [];

function randomPass() {
  // all the possible characters based on user choice put in an array.
  
  //if numbers included then add numbersInPasswrd in characterList,
  if (numInPassword !== null) {
    characterList.concat(numbersInPassword);
  }
  //if lowerCase included then add lowerCasedCharacters in characterList, 
  if (isLower !== null){
    characterList.concat(lowerCasedCharacters);
  }
  //if Uppercase included then add upperCasedCharacters in characterList,
  if (isUpper !== null) {
    characterList.concat(upperCasedCharacters);
  }
  
  //if SpecialCharacters included then add specialCharacters in characterList,
  if (isSpecial !== null); {
    characterList.concat(specialCharacters);
  }
  
  // return characterList;

  //loop though passwordLength to pick a random character from characterList//

  for (let i = 0; i < passwordLength; i++) {
      const randomCharacter = Math.floor(Math.random() * characterList.length); 
      generatedPassword += characterList[randomCharacter];
  }

  console.log("password button clicked ");

  return generatedPassword;
}
 randomPass();

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatedPassword;
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);