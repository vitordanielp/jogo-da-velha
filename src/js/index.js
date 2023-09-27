const SQUARES = document.querySelectorAll('.square');
let judgeSpan = document.querySelector('#judge');
const player1 = "X";
const player2 = "O";
let courrentPlayer = player1;
const winResults = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

judgeSays(`Vez de ${courrentPlayer}`);


function judgeSays(info) {
    judgeSpan.innerHTML = info;
}


function nextPlayer() {
    if (courrentPlayer === player1) {
        courrentPlayer = player2;
    }
    else courrentPlayer = player1;
    judgeSays(`Vez de ${courrentPlayer}`);
}


function compareArrays(list) {
    for (let i of winResults) {
        if (list.includes(i[0]) && list.includes(i[1]) && list.includes(i[2])) {
            return true;
        }
    }
    return false;
}


function checkResult() {
    let list = courrentPlayer === player1 ? player1Plays : player2Plays;
    if (!compareArrays(list)) return false;
    judgeSays(`${courrentPlayer} venceu!`);
    return true;
}


function play(player, square, squarePosition) {
    let playerList;
    square.innerHTML = courrentPlayer;

    if (player === player1) {
        playerList = player1Plays;
    }
    else {
        playerList = player2Plays;
    }

    playerList.push(squarePosition);

    if (checkResult()) {
        return;
    }

    nextPlayer();
}


SQUARES.forEach(square => {
    square.addEventListener('click', () => {
        if (!square.innerHTML && !checkResult()) {
            play(courrentPlayer, square, parseInt(square.classList[1]))
        }
    });
});

let player1Plays = [];
let player2Plays = [];
