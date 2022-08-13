let c = prompt("What operator would you like to use? (+,-,*,/):");
let operator = c;
let total = 0;
const numbers = [1, 2];

//add, subtract, multiple, and divide functions
function add(numbers) {
    return numbers.reduce((a, b) => a + b, total);
}

function subtract(numbers) {
    return numbers.reduce((a, b) => a - b, total);
}

function multiply(numbers) {
    return numbers.reduce((a, b) => a * b);
}

function divide(numbers) {
    return numbers.reduce((a, b) => a / b);
}

function operate(operator, numbers) {
    switch (operator) {
        case "+":
            return add(numbers);
            break;
        case "-":
            return subtract(numbers);
            break;
        case "*":
            return multiply(numbers);
            break;
        case "/":
            return divide(numbers);
            break;
    }
}
console.log(operate(operator, numbers));