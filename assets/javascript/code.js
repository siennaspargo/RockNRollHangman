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
var answerArray = [];
var wrongAnswers = [];

var currentWord = "";


// variables to hold info in HTML for display

var currentWord = document.getElementById("current-word");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("guessed-letters");



function startGame() {
  // randomly choose a word from song bank
currentWord = songBank[Math.floor(Math.random() * songBank.length)];

document.getElementById("current-word").innerHTML = wrongAnswers;

guessesLeft = currentWord.length + 3;

for (var i = 0; i < currentWord.length; i++) {
  answerArray.push('_');
}

document.getElementById('current-word').innerHTML = answerArray.join(' ');
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('guesses-remaining').innerHTML = guessesLeft;


};


function updateGuess(guess) {
// for loop for checking if guess is incorrect

if (currentWord.indexOf(guess) === -1 && wrongAnswers.indexOf(guess) === -1) {

  wrongAnswers.push(guess);

  document.getElementById("guessed-letters").innerHTML = wrongAnswers.join(' ');

  document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

  

} else {

  // check if guess is correct
  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === guess) {
      answerArray[i] = guess;
      guessesLeft--;

      document.getElementById('guesses-remaining').innerHTML = guessesLeft;

      document.getElementById('current-word').innerHTML = answerArray.join(" ");

    }
  }
}
guessesRemaining--; 
console.log(guessesRemaining);

};

function wins() {

  // check to see if there are _'s in current word array, then it has an index and its from 0 + //

  if (guessesLeft <= 1 && answerArray.indexOf('_') !== -1) {

    losses ++;

    alert("too bad, you lost the game. better luck next time.")

    document.getElementById('losses') = losses;

    setTimeout(startGame, 4000);

    // check if value is the same and increase wins //
  } else if (answerArray.indexOf('_') == -1)  {

    wins++;

    alert("Rock On!! You WON !!");

    document.getElementById('wins') = wins;

    setTimeout(startGame, 4000);
  }
};


// function for when a key is pressed/letter guessed
document.onkeyup = function (event) {
  // lettersGuessed.textContent = event.key;

  // set key clicked to lowercase
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);

  // loop through array of songBank
  if (songBank.indexOf(userGuess) === -1 && answerArray.indexOf(userGuess) === -1) {
    losses++;
  } else {
    wins++;
  }

  // display letters guessed, wins, losses, word being guessed

  updateGuess(userGuess);
  // document.getElementById('wins') = wins;
  // document.getElementById('losses') = losses;
  // document.getElementById('guesses-remaining') = guessesLeft;
  // document.getElementById('guessed-letters') = guessedLetters;
};

startGame();