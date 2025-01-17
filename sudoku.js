
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "007491605",
    "200060309",
    "000007010",
    "058600004",
    "003000090",
    "006200187",
    "904070002",
    "670830000",
    "810045000"
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
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
    
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}