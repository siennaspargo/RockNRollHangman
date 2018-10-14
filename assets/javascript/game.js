// Name Global Variables

// var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var wordBank = ["smells like team spirit", "come as you are", "lithium", "lake of fire", "in bloom"]
// var wins = 0;
// var losses = 0;
// var letterGuessed = []

// -------------------------------------------------------------------
// Functions



// fun()  Word Bank

// fun()  letterBank

// fun() on click from letter bank  

// fun() letterGuessed hides from screen once selected

// fun() displays letterGuessed

// fun() _ _ _ _ _ for wordBank --> on click _ _ _ REPPLACES with wordGuessed from wordBank

// fun() ++ wins

// fun() ++ losses

// fun() display hangman nuse as well as nirvana smiley when WRONG letterGuessed

// fun() Hangman div




// -------------------------------------------------------------------
// Objects  + methods

// An object groups together a set of variables  and functions.
// If a function is part of an object its called a method.








// -------------------------------------------------------------------
// Calls

// word bank

// letterBank

// letterGuessed display

// letterGuessed hide

// replace _ _ _ _  with wordGuessed  

// increment wins

// increment losses

// nuse graphics / hangman div


// OBJECT TO HOUSE ALL GAME INFO !
// -------------------------------------------------------------------


var wordGuessGame = {

  // Object for words to be chosen from :
  wordBank: {

    Nirvana: {
      song: "smells like team spirit"
    },
    Metallica: {
      song: "enter the sandman"
    },
    LedZeppelin: {
      song: "stairway to heaven"
    },
    RedHotChiliPeppers: {
      song: "californication"
    },
    SoundGarden: {
      song: "black hole sun"
    },
    PinkFloyd: {
      song: "time"
    },
    LynyrdSkynyrd: {
      song: "freebird"
    },
  },


  // Variables for game

  wordInPlay: null,
  lettersOfTheWord: [],
  matchedLetters: [],
  letterGuessed: null,
  guessesLeft: 0,
  totalGuesses: 0,
  wins: 0,

// on load of the page

setupGame: function() {
  // for random word
  var objKeys = Object.keys(this.wordGuessGame);
  this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];


  // Split the word selected up into its individual letters
  this.lettersOfTheWord = this.wordInPlay.split("");

  // Display _ _ _ _ _ _ for letters not guessed yet in word
  this.processUpdateTotalGuesses();
},

// When the user guesses a letter : 
updatePage: function(letter) {
  // restart game when guesses run out
  if (this.guessesLeft === 0) {
    this.restartGame();
  }
  else {
    // check for incorrect guesses
    this.updateGuesses(letter);
    // check for correct guesses
    this.updateMatchedLetters(letter);
    // reveal guessed letters and remove the underscores _ _ _ _ 
    this.rebuildWordView();
    //restart the game on win:
    if (this.upadateWins() === true) {
      this.restartGame();
    }
  }
},

//  function for incorrect guess

updateGuesses: function(letter) {
  // if the letter is not in the the array of guessedLetters or the lettersOfTheWord, then:
  if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1))
  {
    // add the letter to the guessedLetters array
    this.guessedLetters.push(letter);

    // decrease guesses by one
    this.guessesLeft--;

    // update guesses remaining and guessedLetters on page
    document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(", ");
  }
},

// Function to set the initial guesses the user gets
processUpdateTotalGuesses: function() {
  this.totalGuesses = this.lettersofTheWord.length + 3;
  this.guessesLeft = this.totalGuesses;

  document.querySelector("guesses-remaining").innerHTML = this.guessesLeft;

},

// funtion on correct guess

updateMatchedLetters: function(letter) {
  // loop through letters of the solution
  for (var i = 0; i < this.lettersOfTheWord.length; i++) {
    // if correct guess not already made:
    if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
      // push guessed letter to matched letters array
      this.matchedLetters.push(letter);
    }
  }
},

// FUNCTION display word to be guessed with underscores _ _ _ _ _ _ 
rebuildWordView: function () {
  // empty string to place words into
  var wordView = "";

  // loop through the letters of the song being guessed
  for (var i = 0; i < this.lettersOfTheWord.length; i++) {
    //display letter if not guessed already
    if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
      wordView += this.lettersOfTheWord[i];
    }
    // if it hasnt been guessed, display an underscore _ _ _
    else {
      wordView += "&&";
    }
  }

  // update page with word
  document.querySelector("#current-word").innerHTML = wordView;
},

// FUNCTION to restart game and reset all the variables:
restartGame: function() {
  document.querySelector("guessed-letters").innerHTML = "";
  this.wordInPlay = null;
  this.lettersOfTheWord = [];
  this.matchedLetters = [];
  this.guessedLetters = [];
  this.guessesLeft = 0;
  this.totalGuesses = 0;
  this.letterGuessed = null;
  this.setupGame();
  this.rebuildWordView();
},

// FUNCTION to check win or loss in game
updateWins: function() {
  var win;

  // // for more than one word in answer:
  // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); 
  // //clones the array
  // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

  if ( this.matchedLetters.length === 0) {
    wins: false;
  }

  // otherwise, set win to true:
  else {
    win = true;
  }

  // if letters arent matched to the matchedLetters array, set win to false:
  for (var i = 0; i < this.lettersOfTheWord.length; i++) {
    if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
      win = false;
    }
  }

  // if win is true:
  if (win) {

    // increment wins: 
    this.wins = this.wins + 1;

    // update wins on the page:
    document.querySelector("wins").innerHTML = this.wins;

    // resart game in updatePage function:
    return true;
  }
    // if user looses game, return false to the updatePage function
    return false;
  }

  
};

// CALL on page load start the game
wordGuessGame.setupGame();

// on key press :

document.onkeyup = function(event) {
  // make key pressed lowercase
  wordGuessGame.letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // put letter guessed into updatePage function
  wordGuessGame.updatePage(wordGuessGame.letterGuessed);
};





