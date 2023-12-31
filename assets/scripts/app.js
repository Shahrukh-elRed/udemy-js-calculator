const defaultResult = 10;
let currentResult = defaultResult;
let logList = [];
let detailLogEntries = [];

let calculationDescription = "";
function formObject(type, defaultResult, userInput, currentResult) {
  let logEntry = {
    operator: type,
    InitialValue: defaultResult,
    EnteredValue: userInput,
    result: currentResult,
  };
  detailLogEntries.push(logEntry);
}

function calculation(type) {
  if (userInput.value !== "" && !isNaN(userInput.value)) {
    if (userInput.value == 0) {
      console.log("value is 0");
    }
    if (userInput.value != 0) {
      let backup = currentResult;

      if (type === "ADD") {
        console.log("add block executed");
        calculationDescription = `${currentResult} + ${parseInt(
          userInput.value
        )}`;
        currentResult += parseInt(userInput.value);
        outputResult(currentResult, calculationDescription);
        logList.push(calculationDescription);
        formObject(type, backup, userInput.value, currentResult);
      } else if (type === "SUB") {
        console.log("subtract block executed");
        calculationDescription = `${currentResult} - ${parseInt(
          userInput.value
        )}`;
        currentResult -= parseInt(userInput.value);
        outputResult(currentResult, calculationDescription);
        logList.push(calculationDescription);
        formObject(type, backup, userInput.value, currentResult);
      } else if (type === "MULTIPLY") {
        console.log("multiply block executed");
        calculationDescription = `${currentResult} * ${parseInt(
          userInput.value
        )}`;

        currentResult *= parseInt(userInput.value);
        outputResult(currentResult, calculationDescription);
        logList.push(calculationDescription);
        formObject(type, backup, userInput.value, currentResult);
      } else if (type === "DIVIDE") {
        console.log("divide block executed");
        calculationDescription = `${currentResult} / ${parseInt(
          userInput.value
        )}`;
        currentResult /= parseInt(userInput.value);
        outputResult(currentResult, calculationDescription);
        logList.push(calculationDescription);

        formObject("DIVIDE", backup, userInput.value, currentResult);
      } else if (type === "MODULUS") {
        console.log("modulus block executed");
        calculationDescription = `${currentResult} % ${parseInt(
          userInput.value
        )}`;

        currentResult = defaultResult % parseInt(userInput.value);
        outputResult(currentResult, calculationDescription);

        logList.push(calculationDescription);
        formObject("MODULUS", backup, userInput.value, currentResult);
      }
    }
  } else {
    if (isNaN(userInput.value)) {
      alert(`${userInput.value} is not a number`);
      userInput.value = "";
    } else {
      alert("Please enter a value");
    }
  }
}

function add() {
  if (userInput.value !== "" && !isNaN(userInput.value)) {
    calculation("ADD");
  } else {
    if (isNaN(userInput.value)) {
      alert(`${userInput.value} cannot be added with ${currentResult}`);
      userInput.value = "";
    } else {
      alert("Please enter a value");
    }
  }
}

function subtract() {
  if (userInput.value !== "" && !isNaN(userInput.value)) {
    calculation("SUB");
  } else {
    if (isNaN(userInput.value)) {
      alert(`${userInput.value} cannot be subracted from ${currentResult}`);
      userInput.value = "";
    } else {
      alert("Please enter a value");
    }
  }
}

function multiply() {
  if (userInput.value !== "" && !isNaN(userInput.value)) {
    calculation("MULTIPLY");
  } else {
    if (isNaN(userInput.value)) {
      alert(`${userInput.value} cannot be multiplied with ${currentResult}`);
      userInput.value = "";
    } else {
      alert("Please enter a value");
    }
  }
}

function divide() {
  if (userInput.value !== "" && !isNaN(userInput.value)) {
    calculation("DIVIDE");
  } else {
    if (isNaN(userInput.value)) {
      alert(`${userInput.value} cannot be divided by ${currentResult}`);
      userInput.value = "";
    } else {
      alert("Please enter a value");
    }
  }
}

function modulus() {
  if (userInput.value !== "" && !isNaN(userInput.value)) {
    calculation("MODULUS");
  } else {
    if (isNaN(userInput.value)) {
      alert(`${userInput.value} cannot be calculated with ${currentResult}`);
      userInput.value = "";
    } else {
      alert("Please enter a value");
    }
  }
}

function ResetAll() {
  //   if (currentResult > 0 && currentResult < 50) return;
  //   if (currentResult > 0 || isNaN(currentResult)) return;

  currentResult = 10;
  calculationDescription = "";
  userInput.value = "";
  currentCalculationOutput.value = 0;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", calculation.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculation.bind(this, "SUB"));
multiplyBtn.addEventListener("click", calculation.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculation.bind(this, "DIVIDE"));
modulo.addEventListener("click", calculation.bind(this, "MODULUS"));
Reset.addEventListener("click", ResetAll);
