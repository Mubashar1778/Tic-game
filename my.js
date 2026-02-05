let currentplayer = "X";

const bodycontent = document.querySelector(".bodycontent");
const boxes = document.querySelectorAll(".box");
const btn = document.querySelector(".reset");
const newbtn = document.querySelector("#new");
const winmsg = document.querySelector("#win");
const finmsg = document.querySelector(".final-msg");

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disable = () => {
  for (let box of boxes) {
    box.style.pointerEvents = "none";
  }
};

const remove = () => {
  bodycontent.style.display = "none";
};

// winner

let showWinner = (winner) => {
  winmsg.innerText = `🏆 Congratulations! Player ${winner} has won the game.`;
  finmsg.style.display = "flex";
  disable();
  remove();

  congratulate = lottie.loadAnimation({
    container: document.getElementById("fireworks-container"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "Congratulations.json",
  });
};

// Draw check

let drawcheck = () => {
  winmsg.innerText = "🤝 No winner this round. The game is a draw.";
  finmsg.style.display = "flex";
  disable();
  remove();
};

// winner check

const checkwinner = () => {
  for (pattern of winpattern) {
    let value1 = boxes[pattern[0]].textContent;
    let value2 = boxes[pattern[1]].textContent;
    let value3 = boxes[pattern[2]].textContent;

    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 === value2 && value2 === value3) {
        showWinner(value1);
        return;
      }
    }
  }

  // draw match

  let allfilled = true;

  for (let box of boxes) {
    if (box.textContent === "") {
      allfilled = false;
      break;
    }
  }
  if (allfilled) {
    drawcheck();
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      box.textContent = currentplayer;
      currentplayer = currentplayer === "X" ? "O" : "X";
    }
    checkwinner();
  });
});

btn.addEventListener("click", () => {
  window.location.reload();
});

newbtn.addEventListener("click", () => {
  window.location.reload();
});
