document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })


})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("o jogo acabou!!! o vencedor foi " + playerTime)
        }, 100);
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class ='${symbol}'></div>`
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '', ];
    playerTime = 0;
    symbols = ['o', 'x'];
    gameOver = false
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = "";
    })
    console.log("funciona")
}