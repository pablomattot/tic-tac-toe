const gameboard = (function () {
    const gameboard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

    // cache DOM
    const board = document.querySelector(".gameboard");
    const cellArray = Array.from(board.children);

    _render();

    function _render() {
        let index;
        cellArray.forEach(cell => {
            index = cellArray.indexOf(cell);
            console.log(gameboard[index]);

            cell.textContent = gameboard[index];
        })
    }
})();

const player = () => {
    let name;
    const setName = () => name = prompt("name?");
    return { setName };
}

const gameController = (function () {

})();