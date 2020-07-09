console.log("script linked");

class Game {
  constructor() {
    this.player1Moves = [];
    this.player2Moves = [];
    this.nextColor = "red";
    this.winningCombos = ["1,2,3", "4,5,6", "7,8,9", "1,4,7", "2,5,8", "3,6,9", "1,5,9", "3,5,7"];
  }
  changeColor(theCell) {
    // console.log("here" + this.nextColor);
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
    // console.log(thePlayerMoves.sort());
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
  constructor(cellNumber) {
    this.cellNumber = cellNumber;
    this.clicked = false;
    this.color = "white";
  }
}

let myGame = new Game();
let myCell1 = new Cell(1);
let myCell2 = new Cell(2);
let myCell3 = new Cell(3);
let myCell4 = new Cell(4);
let myCell5 = new Cell(5);
let myCell6 = new Cell(6);
let myCell7 = new Cell(7);
let myCell8 = new Cell(8);
let myCell9 = new Cell(9);

function displayWinner(winningPlayer) {
  // console.log(`${winningPlayer} wins"`);
  let winnerBox = document.querySelector("#winner");
  winnerBox.innerText = `${winningPlayer} wins!!`;
  winnerBox.style.display = "block";
}

function squareClickHandler() {
  let currentCell = event.target.id.substring(7);
  document.querySelector(`#square_${currentCell}`).style.background = myGame.nextColor;
  myGame.changeColor(currentCell);
  if (myGame.compare(myGame.player1Moves)) {
    displayWinner("Player 1");
  } else if (myGame.compare(myGame.player2Moves)) {
    displayWinner("Player 2");
  }
}

function squareMouseOverHandler() {
  let currentCell = event.target.id.substring(7);
  document.querySelector(`#square_${currentCell}`).style.background = myGame.nextColor;
}

function squareMouseOutHandler() {
  let currentCell = event.target.id.substring(7);
  document.querySelector(`#square_${currentCell}`).style.background = "white";
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

let startGameButton = document.querySelector("#StartGame");
startGameButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.background = "white";
  });

  myGame.player1Moves = [];
  myGame.player2Moves = [];
  myGame.nextColor = "red";
  myCell1.clicked = false;
  myCell2.clicked = false;
  myCell3.clicked = false;
  myCell4.clicked = false;
  myCell5.clicked = false;
  myCell6.clicked = false;
  myCell7.clicked = false;
  myCell8.clicked = false;
  myCell9.clicked = false;
  square1.addEventListener("click", squareClickHandler, { once: true });
  square1.addEventListener("mouseover", squareMouseOverHandler);
  square1.addEventListener("mouseout", squareMouseOutHandler);
  square2.addEventListener("click", squareClickHandler, { once: true });
  square2.addEventListener("mouseover", squareMouseOverHandler);
  square2.addEventListener("mouseout", squareMouseOutHandler);
  square3.addEventListener("click", squareClickHandler, { once: true });
  square3.addEventListener("mouseover", squareMouseOverHandler);
  square3.addEventListener("mouseout", squareMouseOutHandler);
  square4.addEventListener("click", squareClickHandler, { once: true });
  square4.addEventListener("mouseover", squareMouseOverHandler);
  square4.addEventListener("mouseout", squareMouseOutHandler);
  square5.addEventListener("click", squareClickHandler, { once: true });
  square5.addEventListener("mouseover", squareMouseOverHandler);
  square5.addEventListener("mouseout", squareMouseOutHandler);
  square6.addEventListener("click", squareClickHandler, { once: true });
  square6.addEventListener("mouseover", squareMouseOverHandler);
  square6.addEventListener("mouseout", squareMouseOutHandler);
  square7.addEventListener("click", squareClickHandler, { once: true });
  square7.addEventListener("mouseover", squareMouseOverHandler);
  square7.addEventListener("mouseout", squareMouseOutHandler);
  square8.addEventListener("click", squareClickHandler, { once: true });
  square8.addEventListener("mouseover", squareMouseOverHandler);
  square8.addEventListener("mouseout", squareMouseOutHandler);
  square9.addEventListener("click", squareClickHandler, { once: true });
  square9.addEventListener("mouseover", squareMouseOverHandler);
  square9.addEventListener("mouseout", squareMouseOutHandler);
});
