let firstNumber = '';
let operator = '';
let secondNumber = '';

document.addEventListener('keydown', keyPress);

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

function keyPress(event) {
    const key = event.key;

    if (key === '/') {
        event.preventDefault();
    }
    //handles numeric keys
    if (/^[0-9]$/.test(key)) {
        appendNumber(key);
    }
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperator(key);
    }

    if (key === '.') {
        appendDecimal();
    }

    if (key === 'Backspace') {
        backspace();
    }

    if (key === 'Enter') {
        calculate();
    }
}

function appendNumber(number) {
    if (operator === '') {
        firstNumber += number;
        updateDisplay(firstNumber);
    } else {
        secondNumber += number;
        updateDisplay(secondNumber);
    }
}

function appendDecimal() {
    if (operator === '') {
        if (!firstNumber.includes('.')) {
            firstNumber += '.';
            updateDisplay(firstNumber);
        }
    } else {
        if (!secondNumber.includes('.')) {
            secondNumber += '.';
            updateDisplay(secondNumber);
        }
    }
}

function setOperator(op) {
    operator = op;
}

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay('0');
}

function calculate() {
  let result;
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  switch (operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case 'x':
          result = num1 * num2;
          break;
      case '/':
          if (num2 === 0) {
              updateDisplay("Not possible ... yet");
              return;
          }
          result = num1 / num2;
          break;
      default:
          return;
  }

  // Round down result to three decimal places
  result = Math.floor(result * 1000) / 1000;

  updateDisplay(result);
  line1.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
  firstNumber = result.toString();
  operator = '';
  secondNumber = '';
  
  line2.textContent = updateDisplay(results);
}


function backspace() {
    if (operator === '') {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber);
    } else {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber);
    }
}

function posNeg() {
  if (operator === '') {
      firstNumber = (parseFloat(firstNumber) * -1).toString();
      updateDisplay(firstNumber);
  } else {
      secondNumber = (parseFloat(secondNumber) * -1).toString();
      updateDisplay(secondNumber);
  }
}

function updateDisplay(value) {
  if (operator === '') {
      line1.textContent = '';
      line2.textContent = value;
  } else {
      line1.textContent = firstNumber +operator;
      line2.textContent = value;
  }
  //document.getElementById('display').value = value;
}