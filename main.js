const buttons = document.querySelectorAll(".button");
const output = document.querySelector(".output");
const inputinside = document.querySelector(".inputinside");
const equal = document.querySelector(".big-button-equal");
const del = document.querySelector(".delete-button");
const reset = document.querySelector(".big-button-reset");
const toggleSwitch = document.querySelector(".toggle-switch");
const toggleNums = document.querySelectorAll(".toggle-nums1");
const toggles = document.querySelectorAll(".theme");
const logo = document.querySelector(".logo");
const inputDiv = document.querySelector(".input");
const container = document.querySelector(".container");
const body = document.getElementById("body");
const calc = document.querySelector(".calc");

toggles.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    elem.style.opacity = 1;
    if (index == 0) {
      body.style.background = "#3A4663";
      toggleSwitch.style.background = "#242D44";
      toggleSwitch.style.border = "5px solid #232D44";
      logo.style.color = "#FFF";
      calc.style.color = "#FFF";
      output.style.color = "#FFF";
      inputinside.style.color = "#FFF";
      inputDiv.style.background = " #181F33";
      for (let i = 0; i < toggleNums.length; i++) {
        toggleNums[i].style.color = "white";
      }
      container.style.background = " #242D44";
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "#434A59";
        buttons[i].style.background = "#EAE3DC";
        buttons[i].style.boxShadow = "inset 0px -4px 0px #B3A497";
      }
      del.style.background = "#647198";
      del.style.color = "white";
      del.style.boxShadow = "inset 0px -4px 0px #414E73";
      reset.style.color = "white";
      reset.style.background = "#647198";
      reset.style.boxShadow = "inset 0px -4px 0px #414E73";
      equal.style.background = "#D03F2F";
      equal.style.color = "white";
      equal.style.boxShadow = "inset 0px -4px 0px #93261A";
    } else if (index == 1) {
      body.style.background = "#E6E6E6";
      toggleSwitch.style.background = "#D2CDCD";
      toggleSwitch.style.border = " 5px solid #D2CDCD";
      logo.style.color = "#36362C";
      calc.style.color = "#36362C";
      output.style.color = "#36362C";
      inputinside.style.color = "#36362C";
      inputDiv.style.background = "white";
      for (let i = 0; i < toggleNums.length; i++) {
        toggleNums[i].style.color = "#36362C";
      }
      container.style.background = "#D2CDCD";
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "#36362C";
        buttons[i].style.background = "#E5E4E1";
        buttons[i].style.boxShadow = "inset 0px -4px 0px 0px #A79E91 ";
      }
      del.style.background = "#378187";
      del.style.color = "white";
      del.style.boxShadow = "0px -4px 0px 0px #1B6066 inset";
      reset.style.background = "#378187";
      reset.style.boxShadow = "0px -4px 0px 0px #1B6066 inset";
      reset.style.color = "white";
      equal.style.color = "white";
      equal.style.background = "#C85402";
      equal.style.boxShadow = "0px -4px 0px 0px #873901 inset";
    } else {
      body.style.background = "#17062A";
      toggleSwitch.style.background = "#1E0936";
      toggleSwitch.style.border = " 5px solid #1E0936";
      logo.style.color = "#FFE53D";
      calc.style.color = "#FFE53D";
      output.style.color = "#FFE53D";
      inputinside.style.color = "#FFE53D";
      inputDiv.style.background = "#1E0936";
      for (let i = 0; i < toggleNums.length; i++) {
        toggleNums[i].style.color = "#FFE53D";
      }
      container.style.background = "#1E0936";
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "#FFE53D";
        buttons[i].style.background = "#331C4D";
        buttons[i].style.boxShadow = "0px -4px 0px 0px #881C9E inset";
      }
      del.style.background = "#56077C";
      del.style.color = "white";
      del.style.boxShadow = "0px -4px 0px 0px #BE15F4 inset";
      reset.style.background = "#56077C";
      reset.style.boxShadow = "0px -4px 0px 0px #BE15F4 inset";
      reset.style.color = "white";
      equal.style.color = "#1A2327";
      equal.style.background = "#00DED0";
      equal.style.boxShadow = "0px -4px 0px 0px #6CF9F1 inset";
    }
    Array.from(toggles)
      .filter((item) => {
        return item != elem;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

let input = "";
let result = "";
for (let button of buttons) {
  const value = button.value;

  function calculateStr(userInput) {
    return new Function("return " + userInput)();
  }

  button.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      output.innerHTML = "";
      inputinside.innerHTML = "";
    } else if (value == "=") {
      inputinside.innerHTML = "";
      result = Math.round(calculateStr(input));
      output.innerHTML = result;
      input = "";
    } else if (value == "backspace") {
      if (input !== "") {
        input = input.toString().slice(0, -1);
        inputinside.innerHTML = input;
      }
      result = result.toString().slice(0, -1);
      output.innerHTML = result;
    } else {
      if (checkFirst(value)) {
        input += value;
        inputinside.innerHTML = input;
      }
    }
  });
}

const checkFirst = (x) => {
  let lastInput = input.slice(-1);
  let operators = ["+", "-", "*", "/"];

  if (x == "." && lastInput == ".") {
    return false;
  }

  if (operators.includes(x)) {
    if (operators.includes(lastInput)) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};
