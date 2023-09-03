const board = document.getElementById('board');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
const cells = Array.from(document.querySelectorAll('.cell'));

function checkWinner() {
    const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                            [0, 4, 8], [2, 4, 6]
                                ];

                                    for (const combo of winningCombos) {
                                            const [a, b, c] = combo;
                                                    if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
                                                                return cells[a].innerText;
                                                                        }
                                                                            }

                                                                                if (cells.every(cell => cell.innerText)) {
                                                                                        return 'Draw';
                                                                                            }

                                                                                                return null;
                                                                                                }

                                                                                                function handleClick(e) {
                                                                                                    const cell = e.target;

                                                                                                        if (!cell.classList.contains('cell') || cell.innerText !== '') {
                                                                                                                return;
                                                                                                                    }

                                                                                                                        cell.innerText = currentPlayer;
                                                                                                                            cell.classList.add(currentPlayer === 'X' ? 'x' : 'o');

                                                                                                                                const winner = checkWinner();
                                                                                                                                    if (winner) {
                                                                                                                                            if (winner === 'Draw') {
                                                                                                                                                        status.innerText = "It's a Draw!";
                                                                                                                                                                } else {
                                                                                                                                                                            status.innerText = `Player ${winner} Wins!`;
                                                                                                                                                                                    }
                                                                                                                                                                                            cells.forEach(cell => cell.classList.add('disabled'));
                                                                                                                                                                                                } else {
                                                                                                                                                                                                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                                                                                                                                                                                                status.innerText = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    function resetGame() {
                                                                                                                                                                                                                        cells.forEach(cell => {
                                                                                                                                                                                                                                cell.innerText = '';
                                                                                                                                                                                                                                        cell.classList.remove('x', 'o', 'disabled');
                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                currentPlayer = 'X';
                                                                                                                                                                                                                                                    status.innerText = 'Player X\'s Turn';
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                    board.addEventListener('click', handleClick);
                                                                                                                                                                                                                                                    resetButton.addEventListener('click', resetGame);

                                                                                                                                                                                                                                                    resetGame();