let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const statusDisplay = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      statusDisplay.innerText = `Player ${gameBoard[a]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    gameActive = false;
    statusDisplay.innerText = "It's a draw!";
  }
}

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (gameBoard[index] !== "" || !gameActive) return;

  gameBoard[index] = currentPlayer;
  e.target.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function restartGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusDisplay.innerText = "";
  cells.forEach(cell => cell.innerText = "");
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
