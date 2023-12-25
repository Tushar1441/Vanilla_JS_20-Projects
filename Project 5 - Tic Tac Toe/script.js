let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.getElementById("message");
let newGameBtn = document.getElementById("newgame-btn");
let popup = document.querySelector(".popup");
let turnO = true;
let gameResult = false;
let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner(box);

    let isGameDraw = checkAllDisabled();
    if (isGameDraw) {
      popup.classList.remove("hide");
      msg.innerHTML = `Game Drawn!`;
    }
  });

});

function checkAllDisabled() {
  for (box of boxes) {
    if (box.disabled == false) return false;
  }
  return true;
}

function checkWinner(box) {
  for (pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        gameResult = true;
        msg.innerHTML = `${box.innerText} is the Winner!`;
        popup.classList.remove("hide");
        disableBtns();
      }
    }
  }
}


function enableBtns() {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
}

function resetGame() {
  popup.classList.add("hide");
  turnO = true;
  enableBtns();
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
