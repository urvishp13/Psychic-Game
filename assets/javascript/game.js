function startNewGame(newSetOfGuesses) {
    var lettersToGuessFrom = "abcdefghijklmnopqustuvwxyz"; /* all the lowercase letters */
    // Reset the game to have the initial number of guesses
    document.getElementById('guesses-left').innerHTML = newSetOfGuesses;
    // Clear the letters guessed area
    lettersGuessedArea.innerHTML = "";
    // Pick a new letter for the game
    return lettersToGuessFrom.charAt(Math.floor(Math.random() * 26));
}

/* Going to be used to add guessed letters to this area */
var lettersGuessedArea = document.getElementById('letters-guessed');

var guessesLeftArea = document.getElementById('guesses-left');
var newSetOfGuesses = guessesLeftArea.innerHTML;

// Start the first game
var letterForGame = startNewGame(newSetOfGuesses);

// When guessing a letter i.e. pressing a key
document.addEventListener('keydown', (event) => {
    console.log("letter pressed: " + event.key);
    let letterGuessed = event.key;
    // If letter guessed is the correct letter
    if (letterGuessed === letterForGame) {
        // YOU WON!
        document.getElementById('wins').innerHTML++;
        // Reset the game 
        letterForGame = startNewGame(newSetOfGuesses);
    }
    // If letter guessed is incorrect
    else {
        if (isNaN(letterGuessed) && letterGuessed.toLowerCase() === letterGuessed) { // make sure only lowercase letter keys are pressed
            // Add letter guessed to letter-guessed-area
            lettersGuessedArea.textContent += `${letterGuessed}, `;
            // Decrement guesses avaiable by 1
            document.getElementById('guesses-left').innerHTML--;
            let numberOfGuesses = guessesLeftArea.textContent;
            // If ran out of guesses
            if (numberOfGuesses == 0) { // double == rather than triple === because numberOfGuesses is a string
                // Increment losses by 1
                document.getElementById('losses').innerHTML++;
                // Start a new game
                letterForGame = startNewGame(newSetOfGuesses);
            }
        }
    }
});