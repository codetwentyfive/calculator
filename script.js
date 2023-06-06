let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendNumber(number) {
    if (operator === '') {
        firstNumber += number;
        updateDisplay(firstNumber);
    } else {
        secondNumber += number;
        updateDisplay(secondNumber);
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
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                updateDisplay("You have created a black hole!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result);
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
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

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
