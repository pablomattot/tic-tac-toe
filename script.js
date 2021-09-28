const gameboard = (function () {
    const gameboard = new Array(9);

    function getGameboard() {
        return { gameboard };
    }

    function setCellValue(val, index) {
        gameboard[index] = val;
        console.log(gameboard);
    }

    return { getGameboard, setCellValue }
})();

const player = () => {
    let marker;
    const setMarker = () => marker = prompt("marker?");
    const getMarker = () => {
        if (marker) {
            return marker
        }
    };
    return { setMarker, getMarker };
}

const gameController = (function () {
    // cache DOM
    const board = document.querySelector(".gameboard");
    const cellArray = Array.from(board.children);

    // bind events
    board.addEventListener("click", addMarker);

    const playerOne = player();
    playerOne.setMarker();

    function render(e,index) {
        e.target.textContent = gameboard.getGameboard().gameboard[index]
    }

    function addMarker(e) {
        const cellIndex = cellArray.indexOf(e.target);
        gameboard.setCellValue(playerOne.getMarker(), cellIndex);
        render(e, cellIndex);
    }
})();