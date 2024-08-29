var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "000000000",
    "000000000",
    "000000000",
    "000000000",
    "000000000",
    "000000000",
    "000000000",
    "000000000",
    "000000000"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
    document.getElementById("solve").addEventListener("click", solveBoard);
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i<=9; i++) {
        //<div id="1"></div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    // document.getElementById("digits").addEventListener("keydown", selectNumKey);

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c=0; c<9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "0"){
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5){
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    if (numSelected == this) {
        numSelected = null;
    } else {
        numSelected = this;
        numSelected.classList.add("number-selected");
    }
}

// function selectNumKey(k) {
//     let n = k.code - 48;
//     if (numSelected != null) {
//         numSelected.classList.remove("number-selected");
//     }
//     if (numSelected == this) {
//         numSelected = null;
//     } else {
//         numSelected = this;
//         numSelected.classList.add("number-selected");
//     }
// }

function selectTile() {
    // if (!tileValid(this)) return;
    this.classList.add("tile-start");

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    this.innerText = numSelected.id;

    board[r] = board[r].substring(0,c)+toString(numSelected)+board[r].substring(c+1,9);
}

// function tileValid(tile) {
//     if (!numSelected || tile.innerText != "") {
//         return false;
//     }

//     let coords = tile.id.split("-");
//     let r = parseInt(coords[0]);
//     let c = parseInt(coords[1]);
    
//     let boxR = r/3;
//     let boxC = c/3;

//     for (let tempR = boxR; tempR<boxR+3; tempR++) {
//         for (let tempC = boxC; tempC<boxC+3; tempC++) {
//             if (int(board[tempR].substring(tempC,tempC+1))==numSelected) {
//                 return false;
//             }
//         }
//     }

//     for (let temp = 0; temp < 9; temp++){
//         if (int(board[temp].substring(c,c+1))==numSelected || int(board[r].substring(temp,temp+1))==numSelected) {
//             return false;
//         }
//     }

//     return true;
// }

function solveBoard() {
    
}