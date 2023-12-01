document.addEventListener('DOMContentLoaded', function () {
    // Initializations
    let secretNumber, currentScore, historyHighScore, guessHistory;

    function initGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        currentScore = 10;
        historyHighScore = parseInt(localStorage.getItem('historyHighScore')) || 0;
        guessHistory = [];

        document.getElementById('current-score').textContent = currentScore;
        document.getElementById('history-high-score').textContent = historyHighScore;
        document.getElementById('guess-input').value = '';
        document.getElementById('message').textContent = '';
        document.body.classList.remove('game-over', 'correct-guess');

        // Clear guess history on game reset
        clearGuessHistory();

        // Adjust rules container size or font size after the first guess
        adjustRulesAfterFirstGuess();
    }

    function updateHistoryHighScore() {
        if (currentScore > historyHighScore) {
            historyHighScore = currentScore;
            localStorage.setItem('historyHighScore', historyHighScore);
            document.getElementById('history-high-score').textContent = historyHighScore;
        }
    }

    function checkGuess() {
        const guessInput = document.getElementById('guess-input');
        const message = document.getElementById('message');
        const guessHistoryList = document.getElementById('guess-history');

        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Invalid value/Number 1-100 only';
            return;
        }

        if (guessHistory.includes(userGuess)) {
            message.textContent = 'You already guessed this number. Try a different one.';
            return;
        }

        guessHistory.push(userGuess);

        // Display guess history
        const listItem = document.createElement('li');
        listItem.textContent = userGuess;
        guessHistoryList.appendChild(listItem);

        if (userGuess === secretNumber) {
            document.body.classList.add('correct-guess');
            message.textContent = 'Congratulations! You guessed the correct number!';
            updateHistoryHighScore();
        } else {
            currentScore--;
            document.getElementById('current-score').textContent = currentScore;

            if (currentScore === 0) {
                document.body.classList.add('game-over');
                message.textContent = 'Sorry, game is over';
            } else {
                // Display too low or too high message
                message.textContent = userGuess < secretNumber ? '⬆️ Too low' : '⬇️ Too high';
          // Add shake animation to the game container
          document.getElementById('game-container').classList.add('shake');
          setTimeout(() => {
              // Remove the shake class after the animation completes
              document.getElementById('game-container').classList.remove('shake');
          }, 500); // Adjust the timeout to match the duration of the animation
      }
  }
        // Adjust rules container size or font size after the first guess
        adjustRulesAfterFirstGuess();

        guessInput.value = '';
    }

    function clearGuessHistory() {
        const guessHistoryList = document.getElementById('guess-history');
        guessHistoryList.innerHTML = '';
    }
    
    function adjustRulesAfterFirstGuess() {
        const rulesContainer = document.getElementById('rules-container');
        if (guessHistory.length === 1) {
            // Hide the rules container after the first guess
            rulesContainer.style.display = 'none';
    
            // Add a title and a placeholder for a clipart PNG above the input box
            const innerContainer = document.getElementById('inner-container');
    
            // Create a new title element
            const titleElement = document.createElement('h1');
            titleElement.textContent = 'Take a Guess!!';
            innerContainer.insertBefore(titleElement, innerContainer.firstChild); // Insert before the first child
    
            // Create a placeholder for a clipart PNG
            const clipartPlaceholder = document.createElement('img');
            clipartPlaceholder.src = 'question_mark_man.png'; // Replace with the actual path
            clipartPlaceholder.alt = 'Clipart';
            clipartPlaceholder.style.width = '35%'; // Set the width to 50%
            innerContainer.insertBefore(clipartPlaceholder, innerContainer.firstChild); // Insert before the first child
        }
    }

    function resetGame() {
        // Reset the entire page
        location.reload();
    }

    // Event listeners
    document.getElementById('check-btn').addEventListener('click', checkGuess);
    document.getElementById('reset-btn').addEventListener('click', resetGame);

    // Initial game setup
    initGame();
});