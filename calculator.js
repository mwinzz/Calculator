//add, subtract, multiple, and divide functions
let total = 0;
const numbers = [];

//add function
function add(numbers) {
    return numbers.reduce((a, b) => a + b, total);
}
//subtract function
function subtract(numbers) {
    return numbers.reduce((a, b) => a - b, total);
}
//multiply function
function multiply(numbers) {
    return numbers.reduce((a, b) => a * b);
}

// function divide() {
function divide(numbers) {
    return numbers.reduce((a, b) => a / b);
}
