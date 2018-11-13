// Variables
var songBank = [
  "smells like team spirit",
  "enter the sandman",
  "stairway to heaven",
  "californication",
  "black hole sun",
  "time",
  "freebird",
  "lithium",
  "black magic woman",
  "im just a girl",
  "i feel like a woman",
];

// variables to hold wins, losses, guesses left, letters guessed
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

var currentWord = "";
var lettersToBeGuessed = [];

// variables to hold info in HTML for display

var currentWord = document.getElementById("current-word");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("guessed-letters");



// function for when a key is pressed/letter guessed
document.onkeyup = function (event) {
  lettersGuessed.textContent = event.key;
  
  // userGuess = event.key;

  // set the users guess to lowercase
  var userGuessLower = userGuess.toLowerCase();

  // randomly choose a word from song bank
  currentWord = songBank[Math.floor(Math.random() * songBank.length)];

  // loop through array of songBank
  if (songBank.indexOf(userGuessLower) === -1) {
    losses++;
    console.log("nope, not in the song bank");
  } else {
    wins++;
    console.log("your guess is in the songbank");
  }





  // display letters guessed, wins, losses, word being guessed
  currentWord.textContent = userGuess;
  wins.textContent = wins;
  losses.textContent = losses;
  guessesRemaining.textContent = guessesRemaining;
  lettersGuessed.textContent = lettersGuessed;
}