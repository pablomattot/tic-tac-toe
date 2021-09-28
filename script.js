const gameboard = (function () {
    let gameboard = new Array(9);

    function getGameboard() {
        return { gameboard };
    }

    function setCellValue(val, index) {
        gameboard[index] = val;
    }

    function resetGameboard() {
        gameboard = Array(9);
    }

    return { getGameboard, setCellValue, resetGameboard }
})();

const player = (name, marker) => {
    return { name, marker };
}

const gameController = (function () {
    // cache DOM
    const board = document.querySelector(".gameboard");
    const cellArray = Array.from(board.children);

    // bind events
    board.addEventListener("click", addMarker);

    // create players
    const playerOne = player("pablo", "X");
    const playerTwo = player("peble", "O");
    let currentPlayer;

    function render(index) {
        cellArray[index].textContent = gameboard.getGameboard().gameboard[index];
    }

    function addMarker(e) {
        const cellIndex = cellArray.indexOf(e.target);
        gameboard.setCellValue(setCurrentPlayer().marker, cellIndex);
        render(cellIndex);
    }

    function setCurrentPlayer() {
        return currentPlayer === playerOne ? currentPlayer = playerTwo : currentPlayer = playerOne;
    }
})();