// Create variables
      // array of choices for the computer
      var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      // wins count
      var wins = 0;
      // losses count
      var losses = 0;
      // guesses count
      var numOfGuesses = 9;
      // guesses list
      var guesses = [];


    // Grab reference to HTML elements I'll be writing to, saying you have something on the page that I want
    var gameHTML = document.getElementById("game");
    
    // Whenever a key is pressed, alert "pressed a button."
    document.onkeyup = function(event) {
      console.log(event);

      // capture key from onkeyup event
      var userGuess = event.key;

      // randomly pick a guess for the computer
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // compare user's guess to the computer's guess and run with win/loss logic
      if (userGuess === computerGuess) {
        wins++;
        guesses = [];
      } 
      // the guess is incorrect
      else { 
        numOfGuesses--;
        if (numOfGuesses === 0) {
          numOfGuesses = 9;
          guesses = [];
          losses++;
        }
        guesses.push(computerGuess);
      }

      // write result to HTML
      gameHTML.innerHTML = "<h2>Wins: " 
      + wins + 
      "</h2><h2>Losses: " 
      + losses + 
      "</h2><h2>Guesses Left: " 
      + numOfGuesses + 
      "</h2><h2>Guesses So Far: "
      + guesses +
      "</h2>";
    }