const blackDefaultInputLabel = document.getElementById(
  "black-default-input-label"
);
const blackDefaultInput = document.getElementById("black-default-input");
const blackExtraInputLabel = document.getElementById("black-extra-input-label");
const blackExtraInput = document.getElementById("black-extra-input");
const whiteDefaultInputLabel = document.getElementById(
  "white-default-input-label"
);
const whiteDefaultInput = document.getElementById("white-default-input");
const whiteExtraInputLabel = document.getElementById("white-extra-input-label");
const whiteExtraInput = document.getElementById("white-extra-input");

let blackDefaultTime = localStorage.getItem("blackDefaultTime")
  ? localStorage.getItem("blackDefaultTime")
  : 300;
let blackExtraTime = localStorage.getItem("blackExtraTime")
  ? localStorage.getItem("blackExtraTime")
  : 30;
let whiteDefaultTime = localStorage.getItem("whiteDefaultTime")
  ? localStorage.getItem("whiteDefaultTime")
  : 300;
let whiteExtraTime = localStorage.getItem("whiteExtraTime")
  ? localStorage.getItem("whiteExtraTime")
  : 30;

const formatTime = (seconds) => {
  return `${seconds >= 60 ? `${Math.floor(seconds / 60)}분 ` : ""}${
    seconds % 60 !== 0 || Math.floor(seconds / 60) === 0
      ? `${seconds % 60}초`
      : ""
  }`;
};

const setBlackDefaultTime = () => {
  blackDefaultTime = blackDefaultInput.value;
  localStorage.setItem("blackDefaultTime", blackDefaultTime);
  blackDefaultInputLabel.innerText = `흑돌 기본 시간: ${formatTime(
    blackDefaultTime
  )}`;
};

const setBlackExtraTime = () => {
  blackExtraTime = blackExtraInput.value;
  localStorage.setItem("blackExtraTime", blackExtraTime);
  blackExtraInputLabel.innerText = `흑돌 추가 시간: ${formatTime(
    blackExtraTime
  )}`;
};

const setWhiteDefaultTime = () => {
  whiteDefaultTime = whiteDefaultInput.value;
  localStorage.setItem("whiteDefaultTime", whiteDefaultTime);
  whiteDefaultInputLabel.innerText = `백돌 기본 시간: ${formatTime(
    whiteDefaultTime
  )}`;
};

const setWhiteExtraTime = () => {
  whiteExtraTime = whiteExtraInput.value;
  localStorage.setItem("whiteExtraTime", whiteExtraTime);
  whiteExtraInputLabel.innerText = `백돌 추가 시간: ${formatTime(
    whiteExtraTime
  )}`;
};

const init = () => {
  blackDefaultInput.value = blackDefaultTime;
  setBlackDefaultTime();
  blackExtraInput.value = blackExtraTime;
  setBlackExtraTime();
  whiteDefaultInput.value = whiteDefaultTime;
  setWhiteDefaultTime();
  whiteExtraInput.value = whiteExtraTime;
  setWhiteExtraTime();
};

blackDefaultInput.addEventListener("input", setBlackDefaultTime);
blackExtraInput.addEventListener("input", setBlackExtraTime);
whiteDefaultInput.addEventListener("input", setWhiteDefaultTime);
whiteExtraInput.addEventListener("input", setWhiteExtraTime);

init();
