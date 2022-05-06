var database = "abcdefghijklmnopqustuvwxyz"; /* all the lowercase letters */

/* Get the letter to guess for this game */
var letterForGame = database.charAt(Math.floor(Math.random() * 26));

/* Going to be used to add guessed letters to this area */
var lettersGuessedArea = document.getElementById("letters-guessed");

var numberOfGuesses = document.getElementById("guesses-left").innerHTML;
while (numberOfGuesses > 0) {
    let letterGuessed = "";
    Document.addEventListener('keydown', (letterPressed) => {
        console.log("letter pressed: " + letterPressed);
        letterGuessed = letterPressed;
    });
    // If letter guessed is the correct letter
    if (letterGuessed === letterForGame) {
        // YOU WON!
        document.getElementById("wins").innerHTML++;
        break;
    }
    // If letter guessed is incorrect
    else {
        // Add letter guessed to letter-guessed-area
        lettersGuessedArea.innerHTML += letterGuessed + ", ";
        // Decrement guesses avaiable by 1
        numberOfGuesses--
        // Update guesses left in DOM
        document.getElementById("guesses-left").innerHTML--;
    }
}
document.getElementById('losses').innerHTML++;