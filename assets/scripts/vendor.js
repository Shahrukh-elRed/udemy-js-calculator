const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const modulo = document.getElementById("btn-modulo");
const Reset = document.getElementById("btn-Reset");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
const currentCalculationOutputhead = document.getElementById(
  "current-calculation-head"
);

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
  currentCalculationOutputhead.style = "display:block";
}
