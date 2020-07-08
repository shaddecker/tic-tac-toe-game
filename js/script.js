console.log("script linked");

class Game {
  constructor() {
    this.player1Moves = [];
    this.player2Moves = [];
    this.nextColor = "red";
    this.winningCombos = [
      "1,2,3",
      "4,5,6",
      "7,8,9",
      "1,4,7",
      "2,5,8",
      "3,6,9",
      "1,5,9",
      "3,5,7",
    ];
  }
  changeColor(theCell) {
    console.log("here" + this.nextColor);
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
    console.log(thePlayerMoves.sort());
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
    this.color = "tan";
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
  console.log(`${winningPlayer} wins"`);
  let winnerBox = document.querySelector("#winner");
  winnerBox.innerText = `${winningPlayer} wins!!`;
  winnerBox.style.display = "block";
}

let square1 = document.querySelector("#square_1");
square1.addEventListener("click", () => {
  if (!myCell1.clicked) {
    document.querySelector("#square_1").style.background = myGame.nextColor;
    myCell1.clicked = true;
    myCell1.color = myGame.nextColor;
    myGame.changeColor(1);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell1.color}`);
  }
  console.log(myGame.nextColor);
});

let square2 = document.querySelector("#square_2");
square2.addEventListener("click", () => {
  if (!myCell2.clicked) {
    document.querySelector("#square_2").style.background = myGame.nextColor;
    myCell2.clicked = true;
    myCell2.color = myGame.nextColor;
    myGame.changeColor(2);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell2.color}`);
  }
});

let square3 = document.querySelector("#square_3");
square3.addEventListener("click", () => {
  if (!myCell3.clicked) {
    document.querySelector("#square_3").style.background = myGame.nextColor;
    myCell3.clicked = true;
    myCell3.color = myGame.nextColor;
    myGame.changeColor(3);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell3.color}`);
  }
});

let square4 = document.querySelector("#square_4");
square4.addEventListener("click", () => {
  if (!myCell4.clicked) {
    document.querySelector("#square_4").style.background = myGame.nextColor;
    myCell4.clicked = true;
    myCell4.color = myGame.nextColor;
    myGame.changeColor(4);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell4.color}`);
  }
});

let square5 = document.querySelector("#square_5");
square5.addEventListener("click", () => {
  if (!myCell5.clicked) {
    document.querySelector("#square_5").style.background = myGame.nextColor;
    myCell5.clicked = true;
    myCell5.color = myGame.nextColor;
    myGame.changeColor(5);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell5.color}`);
  }
});

let square6 = document.querySelector("#square_6");
square6.addEventListener("click", () => {
  if (!myCell6.clicked) {
    document.querySelector("#square_6").style.background = myGame.nextColor;
    myCell6.clicked = true;
    myCell6.color = myGame.nextColor;
    myGame.changeColor(6);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell6.color}`);
  }
});

let square7 = document.querySelector("#square_7");
square7.addEventListener("click", () => {
  if (!myCell7.clicked) {
    document.querySelector("#square_7").style.background = myGame.nextColor;
    myCell7.clicked = true;
    myCell7.color = myGame.nextColor;
    myGame.changeColor(7);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell7.color}`);
  }
});

let square8 = document.querySelector("#square_8");
square8.addEventListener("click", () => {
  if (!myCell8.clicked) {
    document.querySelector("#square_8").style.background = myGame.nextColor;
    myCell8.clicked = true;
    myCell8.color = myGame.nextColor;
    myGame.changeColor(8);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell8.color}`);
  }
});

let square9 = document.querySelector("#square_9");
square9.addEventListener("click", () => {
  if (!myCell9.clicked) {
    document.querySelector("#square_9").style.background = myGame.nextColor;
    myCell9.clicked = true;
    myCell9.color = myGame.nextColor;
    myGame.changeColor(9);
    if (myGame.compare(myGame.player1Moves)) {
      displayWinner("Player 1");
    } else if (myGame.compare(myGame.player2Moves)) {
      displayWinner("Player 2");
    }
  } else {
    console.log(`cell already clicked and is ${myCell9.color}`);
  }
});

let startGameButton = document.querySelector("#StartGame");
startGameButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.background = "tan";
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
});
