function calculate(a, b, operator) {
    if (operator == '+') {
        return a + b;
    }
    else if (operator == '-') {
        return a - b;
    }
    else if (operator == '*') {
        return a * b;
    }
    else {
        return a / b;
    };
};

console.log('Sum is:', calculate(3, 4, '+'));
console.log('Subtract is:', calculate(3, 4, '-'));
console.log('Multiply is:', calculate(3, 4, '*'));
console.log('Devidie is:', calculate(3, 4, '/'));
