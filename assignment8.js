let player1Score = 0;
let player2Score = 0;

function rollDice(player) {
    const diceNumber = Math.floor(Math.random() * 6) + 1;

    if (player === 'player1') {
        player1Score += diceNumber;
        document.getElementById('player1Score').textContent = player1Score;
        updateDie('player1', diceNumber); // Update the dice representation for Player 1
    } else {
        player2Score += diceNumber;
        document.getElementById('player2Score').textContent = player2Score;
        updateDie('player2', diceNumber); // Update the dice representation for Player 2
    }

    if (player1Score >= 16) {
        displayResult('Player 1');
    } else if (player2Score >= 16) {
        displayResult('Player 2');
    }
}

function displayResult(winner) {
    const result = document.getElementById('result');
    result.textContent = `Congrats, ${winner} wins the game!`;
}

function updateDie(player, value) {
    const dieElement = document.getElementById(`${player}Die`);
    dieElement.innerHTML = '';

    for (let i = 0; i < value; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dieElement.appendChild(dot);
    }
}