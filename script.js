const display = document.getElementById('display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.getElementById('clearBtn')
const calculateButton = document.getElementById('calculateBtn')

let currentInput = '0'
let previousInput = '0'
let currentOperator = null
let shouldClearDisplay = false

numberButtons.forEach((button) => {
  button.addEventListener('click', function () {
    appendNumber(button.textContent)
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', function () {
    setOperator(button.textContent)
  })
})

clearButton.addEventListener('click', clearDisplay)
calculateButton.addEventListener('click', calculate)

document.addEventListener('keydown', function (event) {
  const key = event.key
  if (/[0-9]/.test(key)) {
    appendNumber(key)
  } else if (['+', '-', '*', '/'].includes(key)) {
    setOperator(key)
  } else if (key === 'Enter') {
    calculate()
  } else if (key === 'Backspace') {
    clearDisplay()
  }
})

function appendNumber(number) {
  if (currentInput === '0' || shouldClearDisplay) {
    currentInput = number
    shouldClearDisplay = false
  } else {
    currentInput += number
  }
  updateDisplay()
}

function setOperator(operator) {
  if (currentOperator !== null) {
    calculate()
  }
  previousInput = currentInput
  currentOperator = operator
  shouldClearDisplay = true
}

function clearDisplay() {
  currentInput = '0'
  previousInput = '0'
  currentOperator = null
  shouldClearDisplay = false
  updateDisplay()
}

function calculate() {
  const previous = parseFloat(previousInput)
  const current = parseFloat(currentInput)
  let result = 0
  if (currentOperator === '+') {
    result = previous + current
  } else if (currentOperator === '-') {
    result = previous - current
  } else if (currentOperator === '*') {
    result = previous * current
  } else if (currentOperator === '/') {
    result = previous / current
  }
  currentInput = result.toString()
  previousInput = '0'
  currentOperator = null
  shouldClearDisplay = true
  updateDisplay()
}

function updateDisplay() {
  display.textContent = currentInput
}
