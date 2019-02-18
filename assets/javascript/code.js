
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

// game variables
var wins = 0;
var losses = 0;
var guessesLeft;
var answerArray = [];
var wrongAnswers = [];
// string to hold current word being guessed
var currentWord = "";


// variables to hold info in HTML for display
var currentWord = document.getElementById("current-word");
var wins = document.getElementById("wins").innerHTML;
var losses = document.getElementById("losses").innerHTML;
var guessesRemaining = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("guessed-letters");



function startGame() {
  // randomly choose a word from array songBank
  currentWord = songBank[Math.floor(Math.random() * songBank.length)];

  // place wrongly guessed letters at currentword
  document.getElementById("current-word").innerHTML = wrongAnswers;

  // set guessesLeft to 3 chances more than number of letters in currentWord
  guessesLeft = currentWord.length + 3;

  // display _'s on page equal to length of currentWord
  for (var i = 0; i < currentWord.length; i++) {
    answerArray.push('_');
  }

  // display answerArray and guessesLeft on page
  document.getElementById('current-word').innerHTML = answerArray.join(" ");
  document.getElementById('wins').innerHTML = wins++;
  document.getElementById('wins').innerHTML = losses++;
  document.getElementById('guesses-remaining').innerHTML = guessesLeft;


}


function updateGuess(guess) {
  // for loop for checking if guess is incorrect
  if (currentWord.indexOf(guess) === -1 && wrongAnswers.indexOf(guess) === -1) {
    wrongAnswers.push(guess);
    document.getElementById("guessed-letters").innerHTML = wrongAnswers.join(" ");
    guessesLeft--;
    document.getElementById("guesses-remaining").innerHTML = guessesLeft;
    
    checkWins();
  } else {
    // check if guess is correct
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === guess) {
        answerArray[i] = guess;
        guessesLeft--;
        document.getElementById('guesses-remaining').innerHTML = guessesLeft;
        document.getElementById('current-word').innerHTML = answerArray.join(" ");

        checkWins();
      }

    }
  }
}

function checkWins() {

  // check to see if there are _'s in current word array, then it has an index and its from 0 + //

  if (guessesLeft < 1 && answerArray.indexOf('_') !== -1) {
    alert("too bad, you lost the game. better luck next time.")
    document.getElementById('losses') = losses;
    setTimeout(startGame, 4000);

    // check if value is the same and increase wins //
  } else if (answerArray.indexOf('_') == -1) {
    wins++;

    alert("Rock On!! You WON !!");

    document.getElementById('wins') = wins;

    setTimeout(startGame, 4000);
  }
};


// function for when a key is pressed/letter guessed
document.onkeyup = function (event) {

  // set key clicked to lowercase
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);

  // loop through array of songBank
  if (answerArray.indexOf(userGuess) == -1) {
    updateGuess(userGuess);
  } if (event.keyCode == 13) {
    startGame();
  }
};

startGame();