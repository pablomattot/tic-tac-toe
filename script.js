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
        return { board };
    }

    function setCellValue(val, index) {
        gameboard[index] = val;
    }

    return { getGameboard, setCellValue, render }
})();

const gameController = (function () {
    const cellArray = Array.from(gameboard.getGameboard().board.children);

    // bind events
    gameboard.getGameboard().board.addEventListener("click", addMarker);

    // create players
    const playerOne = player("pablo", "X");
    const playerTwo = player("peble", "O");
    let currentPlayer;

    function addMarker(e) {
        if (!e.target.textContent) {
            gameboard.setCellValue(setCurrentPlayer().marker, cellArray.indexOf(e.target));
            gameboard.render();
        }
    }

    function setCurrentPlayer() {
        return currentPlayer === playerOne ? currentPlayer = playerTwo : currentPlayer = playerOne;
    }
})();