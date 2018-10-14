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
  "",
]

var currentWord = "";
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var lettersGuessed = [];
var lettersToBeGuessed = [];

// variables to hold info in HTML for display

var currentWord = document.getElementById("currentWord-Text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemaining = document.getElementById("guessesRemaining");
var lettersGuessed = document.getElementById("lettersGuessed-text");

// function for selection of key/letter

document.onkeyup = function(event) {
   lettersGuessed = event.key;

  // loop through array of songBank
   currentWord = songBank[Math.floor(Math.random() * songBank.length)];

   // increments of losses and wins

   if ((lettersGuessed === 
}

// display letters guessed, wins, losses, word being guessed

currentWord.textContent = currentWord;
winsText.textContent = wins;
lossesText.textContent = losses;
guessesRemaining.textContent = guessesRemaining;
lettersGuessed.textContent = lettersGuessed;
