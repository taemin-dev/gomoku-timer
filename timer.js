const screen = document.getElementById("timer");
const passTurnBtn = document.getElementById("pass-turn-btn");
const returnA = document.getElementById("return-a");
const fullscreenBtn = document.getElementById("fullscreen-btn");

let isGameOver = false;
let isBlacksTurn = true;

let blackDefaultTimer = localStorage.getItem("blackDefaultTime")
  ? localStorage.getItem("blackDefaultTime")
  : 300;
let blackExtraTimer = localStorage.getItem("blackExtraTime")
  ? parseInt(localStorage.getItem("blackExtraTime")) + 1
  : 30 + 1;
let whiteDefaultTimer = localStorage.getItem("whiteDefaultTime")
  ? localStorage.getItem("whiteDefaultTime")
  : 300;
let whiteExtraTimer = localStorage.getItem("whiteExtraTime")
  ? parseInt(localStorage.getItem("whiteExtraTime")) + 1
  : 30 + 1;

const formatTime = (seconds) => {
  return `${seconds >= 60 ? `${Math.floor(seconds / 60)}분 ` : ""}${
    seconds % 60 !== 0 || Math.floor(seconds / 60) === 0
      ? `${seconds % 60}초`
      : ""
  }`;
};

setInterval(() => {
  if (isBlacksTurn) {
    if (blackDefaultTimer > 1) {
      blackDefaultTimer -= 1;
      passTurnBtn.innerText = `남은 시간: ${formatTime(blackDefaultTimer)}`;
    } else if (blackExtraTimer > 1) {
      blackExtraTimer -= 1;
      passTurnBtn.innerText = `🚨추가 시간!: ${formatTime(blackExtraTimer)}`;
    } else {
      passTurnBtn.innerText = "백돌 승리\n\n다시하기";
      passTurnBtn.className = "white-btn";
      screen.style.backgroundColor = "#ecf0f1";
      returnA.style.color = "#2d3436";
      fullscreenBtn.style.color = "#2d3436";
      isGameOver = true;
    }
  } else {
    if (whiteDefaultTimer > 1) {
      whiteDefaultTimer -= 1;
      passTurnBtn.innerText = `남은 시간: ${formatTime(whiteDefaultTimer)}`;
    } else if (whiteExtraTimer > 1) {
      whiteExtraTimer -= 1;
      passTurnBtn.innerText = `🚨추가 시간!: ${formatTime(whiteExtraTimer)}`;
    } else {
      passTurnBtn.innerText = "흑돌 승리\n\n다시하기";
      passTurnBtn.className = "black-btn";
      screen.style.backgroundColor = "#2d3436";
      returnA.style.color = "#ecf0f1";
      fullscreenBtn.style.color = "#ecf0f1";
      isGameOver = true;
    }
  }
}, 1 * 1000);

const ClickPassTurnBtn = () => {
  if (isGameOver) {
    isBlacksTurn = true;
    passTurnBtn.className = "black-btn";
    screen.style.backgroundColor = "#2d3436";
    returnA.style.color = "#ecf0f1";
    fullscreenBtn.style.color = "#ecf0f1";
    blackDefaultTimer = localStorage.getItem("blackDefaultTime")
      ? localStorage.getItem("blackDefaultTime")
      : 300;
    blackExtraTimer = localStorage.getItem("blackExtraTime")
      ? parseInt(localStorage.getItem("blackExtraTime")) + 1
      : 30 + 1;
    whiteDefaultTimer = localStorage.getItem("whiteDefaultTime")
      ? localStorage.getItem("whiteDefaultTime")
      : 300;
    whiteExtraTimer = localStorage.getItem("whiteExtraTime")
      ? parseInt(localStorage.getItem("whiteExtraTime")) + 1
      : 30 + 1;
    if (blackDefaultTimer > 1) {
      passTurnBtn.innerText = `남은 시간: ${formatTime(blackDefaultTimer)}`;
    } else if (blackExtraTimer > 0) {
      passTurnBtn.innerText = `🚨추가 시간!: ${formatTime(blackExtraTimer)}`;
    }
    isGameOver = false;
  } else {
    isBlacksTurn = !isBlacksTurn;
    if (isBlacksTurn) {
      passTurnBtn.className = "black-btn";
      screen.style.backgroundColor = "#2d3436";
      returnA.style.color = "#ecf0f1";
      fullscreenBtn.style.color = "#ecf0f1";
      blackExtraTimer = localStorage.getItem("blackExtraTime")
        ? localStorage.getItem("blackExtraTime")
        : 30;
      if (blackDefaultTimer > 1) {
        passTurnBtn.innerText = `남은 시간: ${formatTime(blackDefaultTimer)}`;
      } else if (blackExtraTimer > 0) {
        passTurnBtn.innerText = `🚨추가 시간!: ${formatTime(blackExtraTimer)}`;
      }
    } else {
      passTurnBtn.className = "white-btn";
      screen.style.backgroundColor = "#ecf0f1";
      returnA.style.color = "#2d3436";
      fullscreenBtn.style.color = "#2d3436";
      whiteExtraTimer = localStorage.getItem("whiteExtraTime")
        ? localStorage.getItem("whiteExtraTime")
        : 30;
      if (whiteDefaultTimer > 1) {
        passTurnBtn.innerText = `남은 시간: ${formatTime(whiteDefaultTimer)}`;
      } else if (whiteExtraTimer > 0) {
        passTurnBtn.innerText = `🚨추가 시간!: ${formatTime(whiteExtraTimer)}`;
      }
    }
  }
};

const handleFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreenBtn.className = "fa-solid fa-expand";
  } else {
    screen.requestFullscreen();
    fullscreenBtn.className = "fa-solid fa-compress";
  }
};

passTurnBtn.innerText = `남은 시간: ${formatTime(blackDefaultTimer)}`;
passTurnBtn.addEventListener("click", ClickPassTurnBtn);
fullscreenBtn.addEventListener("click", handleFullscreen);
