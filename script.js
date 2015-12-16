// function gameFunctions() {
//   var butts = document.querySelectorAll("#board button");
//   var players = ["Ex", "Oh"];
//   var currentTurn = 0;
//   var display = new Display(document.querySelector("#playerMessage"));
//   var gameOver = false

//   display.
// }
// gameFunctions()
var player;
var buttons = document.querySelectorAll("button");
var counter = 1;

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playMove)
  }
// show move in boxes
function playMove(event) {
  if (this.innerHTML === "") {

      if (counter % 2 === 0) {
      document.getElementById(this.id).innerHTML = 'O';
    } else {
      document.getElementById(this.id).innerHTML = 'X';
    }
    counter += 1;
    var winner = whoWins();
    console.log(whoWins());

    // if (winner !== null) {
    //   document.getElementById("playerMessage").innerHTML = (player + " wins!");
    // }

}

}

checkBoard = function() {
  sq1 = $("#sq1").textContent;
  sq2 = $("#sq2").textContent;
  sq3 = $("#sq3").textContent;
  sq4 = $("#sq4").textContent;
  sq5 = $("#sq5").textContent;
  sq6 = $("#sq6").textContent;
  sq7 = $("#sq7").textContent;
  sq8 = $("#sq8").textContent;
  sq9 = $("#sq9").textContent;
};

//Find a winner
function whoWins() {
  if (winnerIs('X')) {
    return document.getElementById("playerMessage").innerHTML = ("X wins!");
  }
  if (winnerIs('O')) {
    return document.getElementById("playerMessage").innerHTML = ("O wins!");
  }
  if (counter === 10) {
    return document.getElementById("playerMessage").innerHTML = ("LOOSERS!!!");
  }

}

// Get winner
function winnerIs(player) {
  return winsHorz(player) || winsVert(player) || winsDiag(player);
}

function winsHorz(player) {
  return winCombo(player, "sq1", "sq2", "sq3") ||
         winCombo(player, "sq4", "sq5", "sq6") ||
         winCombo(player, "sq7", "sq8", "sq9");
}

function winsVert(player) {
  return winCombo(player, "sq1", "sq4", "sq7") ||
         winCombo(player, "sq2", "sq5", "sq8") ||
         winCombo(player, "sq3", "sq6", "sq9");
}

function winsDiag(player) {
  return winCombo(player, "sq1", "sq5", "sq9") ||
         winCombo(player, "sq3", "sq5", "sq7");
}

function winCombo(player, sq1, sq2, sq3) {
var vsq1 = document.getElementById(sq1).textContent;
var vsq2 = document.getElementById(sq2).textContent;
var vsq3 = document.getElementById(sq3).textContent;

  return (vsq1 === player) && (vsq2 === player) && (vsq3 === player);
}
