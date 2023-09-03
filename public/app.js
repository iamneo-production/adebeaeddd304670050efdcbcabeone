// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
  // Your game logic here
  let currentPlayer = "X";
  let gameEnded = false;

  // Get the game cells
  const cells = document.querySelectorAll(".box");

  // Add click event listeners to cells
  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
  });

  // Function to handle cell clicks
  function handleCellClick() {
    if (!gameEnded && this.textContent === "") {
      this.textContent = currentPlayer;
      this.classList.add(currentPlayer);
      checkWin();
      togglePlayer();
    }
  }

  // Function to toggle between players
  function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const resultText = document.querySelector(".result-text");
    resultText.textContent = `Player ${currentPlayer}'s Turn`;
  }

  // Function to check for a win
  function checkWin() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        cells[a].textContent === ```javascript
                                                                if (
                                                                      cells[a].textContent === currentPlayer &&
                                                                            cells[b].textContent === currentPlayer &&
                                                                                  cells[c].textContent === currentPlayer
                                                                                      ) {
                                                                                            endGame(Player { currentPlayer } wins!);
                                                                                                  break;
                                                                                                      }
                                                                                                        }

                                                                                                          if (!gameEnded && Array.from(cells).every(cell => cell.textContent !== "")) {
                                                                                                              endGame("It's a draw!");
                                                                                                                }
                                                                                                                }

                                                                                                                // Function to end the game
                                                                                                                function endGame(result) {
                                                                                                                  gameEnded = true;
                                                                                                                    const resultText = document.querySelector(".result-text");
                                                                                                                      resultText.textContent = result;
                                                                                                                        const resetButton = document.querySelector("#reset-button");
                                                                                                                          resetButton.disabled = false;
                                                                                                                            resetButton.addEventListener("click", resetGame);
                                                                                                                            }

                                                                                                                            // Function to reset the game
                                                                                                                            function resetGame() {
                                                                                                                              currentPlayer = "X";
                                                                                                                                gameEnded = false;
                                                                                                                                  const resultText = document.querySelector(".result-text");
                                                                                                                                    resultText.textContent = "Player 1's Turn";
                                                                                                                                      const resetButton = document.querySelector("#reset-button");
                                                                                                                                        resetButton.disabled = true;
                                                                                                                                          cells.forEach(cell => {
                                                                                                                                              cell.textContent = "";
                                                                                                                                                  cell.classList.remove("X", "O");
                                                                                                                                                    });
                                                                                                                                                    }

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
