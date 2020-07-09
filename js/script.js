console.log("script linked");

class Game {
  constructor() {
    this.player1Moves = [];
    this.player2Moves = [];
    this.nextColor = "red";
    this.winningCombos = ["1,2,3", "4,5,6", "7,8,9", "1,4,7", "2,5,8", "3,6,9", "1,5,9", "3,5,7"];
  }
  changeColor(theCell) {
    if (this.nextColor === "red") {
      this.player1Moves.push(theCell);
      this.nextColor = "blue";
    } else {
      this.player2Moves.push(theCell);
      this.nextColor = "red";
    }
  }
  compare(thePlayerMoves) {
    let winnerFound = false;
    if (thePlayerMoves.length >= 3) {
      thePlayerMoves = thePlayerMoves.sort();
      let strPlayerMoves = thePlayerMoves.join();
      for (let j = 0; j < this.winningCombos.length; j++) {
        if (strPlayerMoves.search(this.winningCombos[j]) >= 0) {
          winnerFound = true;
        }
      }
    }
    return winnerFound;
  }
}

class Cell {
  constructor() {
    this.clicked = false;
  }
}

function displayWinner(winningPlayer) {
  let winnerBox = document.querySelector("#winner");
  winnerBox.innerText = `${winningPlayer} wins!!`;
  winnerBox.style.display = "block";
  for (j = 1; j <= 9; j++) {
    let theSquare = whichSquare(j);
    theSquare.removeEventListener("click", squareClickHandler);
    theSquare.removeEventListener("mouseover", squareMouseOverHandler);
    theSquare.removeEventListener("mouseout", squareMouseOutHandler);
  }
}

function whichSquare(num) {
  let squareObject = null;
  switch (num) {
    case 1:
      squareObject = square1;
      break;
    case 2:
      squareObject = square2;
      break;
    case 3:
      squareObject = square3;
      break;
    case 4:
      squareObject = square4;
      break;
    case 5:
      squareObject = square5;
      break;
    case 6:
      squareObject = square6;
      break;
    case 7:
      squareObject = square7;
      break;
    case 8:
      squareObject = square8;
      break;
    case 9:
      squareObject = square9;
      break;
  }
  return squareObject;
}

function whichCell(num) {
  let cellObject = null;
  switch (num) {
    case "1":
      cellObject = myCell1;
      break;
    case "2":
      cellObject = myCell2;
      break;
    case "3":
      cellObject = myCell3;
      break;
    case "4":
      cellObject = myCell4;
      break;
    case "5":
      cellObject = myCell5;
      break;
    case "6":
      cellObject = myCell6;
      break;
    case "7":
      cellObject = myCell7;
      break;
    case "8":
      cellObject = myCell8;
      break;
    case "9":
      cellObject = myCell9;
      break;
  }
  return cellObject;
}

function squareClickHandler() {
  let currentCell = event.target.id.substring(7);
  document.querySelector(`#square_${currentCell}`).style.background = myGame.nextColor;
  myGame.changeColor(currentCell);
  whichCell(currentCell).clicked = true;
  if (myGame.compare(myGame.player1Moves)) {
    displayWinner("Player 1");
  } else if (myGame.compare(myGame.player2Moves)) {
    displayWinner("Player 2");
  }
}

function squareMouseOverHandler() {
  let currentCell = event.target.id.substring(7);
  let cellObject = whichCell(currentCell);
  if (cellObject.clicked === false) {
    document.querySelector(`#square_${currentCell}`).style.background = myGame.nextColor;
  }
}

function squareMouseOutHandler() {
  let currentCell = event.target.id.substring(7);
  if (!whichCell(currentCell).clicked) {
    document.querySelector(`#square_${currentCell}`).style.background = "white";
  }
}

let square1 = document.querySelector("#square_1");
let square2 = document.querySelector("#square_2");
let square3 = document.querySelector("#square_3");
let square4 = document.querySelector("#square_4");
let square5 = document.querySelector("#square_5");
let square6 = document.querySelector("#square_6");
let square7 = document.querySelector("#square_7");
let square8 = document.querySelector("#square_8");
let square9 = document.querySelector("#square_9");
let myCell1 = new Cell();
let myCell2 = new Cell();
let myCell3 = new Cell();
let myCell4 = new Cell();
let myCell5 = new Cell();
let myCell6 = new Cell();
let myCell7 = new Cell();
let myCell8 = new Cell();
let myCell9 = new Cell();
let myGame = new Game();

let startGameButton = document.querySelector("#StartGame");
startGameButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.background = "white";
  });

  myGame.player1Moves = [];
  myGame.player2Moves = [];
  myGame.nextColor = "red";

  for (j = 1; j <= 9; j++) {
    let theSquare = whichSquare(j);
    theSquare.removeEventListener("click", squareClickHandler);
    theSquare.removeEventListener("mouseover", squareMouseOverHandler);
    theSquare.removeEventListener("mouseout", squareMouseOutHandler);
  }
  for (j = 1; j <= 9; j++) {
    let theSquare = whichSquare(j);
    theSquare.addEventListener("click", squareClickHandler);
    theSquare.addEventListener("mouseover", squareMouseOverHandler);
    theSquare.addEventListener("mouseout", squareMouseOutHandler);
  }
});
