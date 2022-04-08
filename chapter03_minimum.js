// Binding function
let min = function (firstOperand, secondOperand) {
    return firstOperand > secondOperand ? secondOperand : firstOperand
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Redefining min function using arrow notation
min = (firstNum, secondNum) => {
    return firstNum > secondNum ? secondNum : firstNum
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Function declaration
function minimum (firstOperand, secondOperand) {
    return firstOperand > secondOperand ? secondOperand : firstOperand
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
