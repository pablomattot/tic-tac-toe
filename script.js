const player = (name, marker) => {
    return { name, marker };
}

const gameboard = (function () {

    let gameboard = new Array(9);

    // cache DOM
    const board = document.querySelector(".gameboard");
    const cellArray = Array.from(board.children);

    function render() {
        for (let i = 0; i <= cellArray.length - 1; i++) {
            cellArray[i].textContent = gameboard[i];
        }
    }

    function getGameboard() {
        return { gameboard, board };
    }

    function setCellValue(val, index) {
        gameboard[index] = val;
    }

    function resetBoard() {
        gameboard = Array(9);
        cellArray.forEach(cell => cell.style.background = "none");
        render();
    }

    return { getGameboard, setCellValue, render, resetBoard }
})();

const gameController = (function () {
    // cache DOM
    const cellArray = Array.from(gameboard.getGameboard().board.children);
    const resetBtn = document.querySelector("#reset");
    const winnerDisplay = document.querySelector("#winner");

    // bind events
    gameboard.getGameboard().board.addEventListener("click", addMarker);
    resetBtn.addEventListener("click", () => {
        gameboard.resetBoard();
        winner = false;
        winnerDisplay.textContent = "";
    });

    // create players
    const playerOne = player("Player One", "X");
    const playerTwo = player("Player Two", "O");
    let currentPlayer;
    let winner = false;

    function addMarker(e) {
        if (!e.target.textContent && !winner) {
            gameboard.setCellValue(setCurrentPlayer().marker, cellArray.indexOf(e.target));
            gameboard.render();
            checkWinner();
            e.target.style.backgroundColor = "#FFF";
            console.log(e.target);
        }
    }

    function setCurrentPlayer() {
        return currentPlayer === playerOne ? currentPlayer = playerTwo : currentPlayer = playerOne;
    }

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function checkWinner() {
        winConditions.forEach((item) => {
            if (gameboard.getGameboard().gameboard[item[0]] === currentPlayer.marker
                && gameboard.getGameboard().gameboard[item[1]] === currentPlayer.marker
                && gameboard.getGameboard().gameboard[item[2]] === currentPlayer.marker) {
                winnerDisplay.textContent = `${currentPlayer.name} won!`;
                winner = true;
            }
        })
    }
})();