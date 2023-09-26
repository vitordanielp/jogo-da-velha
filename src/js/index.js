const SQUARES = document.querySelectorAll('.square');
let judgeSpan = document.querySelector('#judge');
const player1 = "X";
const player2 = "O";
let courrentPlayer = player1;
judgeSays(`Vez de ${courrentPlayer}`);

function judgeSays(info) {
    judgeSpan.innerHTML = info;
}


function nextPlayer() {
    if (courrentPlayer === player1) {
        courrentPlayer = player2;
    }
    else courrentPlayer = player1;
    judgeSays(`Vez de ${courrentPlayer}`)
}

// TODO: resolver problema de regra. [3, 5, 6, 7, 9] é um exemplo que está errado.
function compareArrays(a, b) {
    return JSON.stringify(a.sort().slice(0, 3)) === JSON.stringify(b)
}


function checkResult(list) {
    for (let result of winResults) {
        if (compareArrays(list, result)) {
            judgeSays(`${courrentPlayer} ganhou!`);
            return true;
        }
    }
    return false;
}


function play(player, square, squarePosition) {
    let playerList;
    square.innerHTML = courrentPlayer;

    if (player === player1) {
        playerList = player1Plays;
    }
    else (playerList = player2Plays);

    playerList.push(squarePosition);

    if (playerList.length >= 3) {
        if(checkResult(playerList)) {
            return;
        }
    }
    nextPlayer();
}


SQUARES.forEach(square => {
    square.addEventListener('click', () => {
        if (!square.innerHTML) {
            play(courrentPlayer, square, parseInt(square.classList[1]))
        }
    });
});

let player1Plays = [];
let player2Plays = [];

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
