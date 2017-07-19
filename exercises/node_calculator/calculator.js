var readline = require('readline-sync');

function prompt(num1, num2) {
    var num1 = readline.question("Please enter your first number: ");
    var num2 = readline.question("Please enter your second number: ");
    var operation = readline.question("Please enter the desired operation. [+], [-], [/], or [*]: ");
    
    if (operation === "+") {
        console.log("The result is: " + add(num1, num2));
    } else if (operation === "-") {
        console.log("The result is: " + subtract(num1, num2));
    } else if (operation === "/") {
        console.log("The result is: " + divide(num1, num2));
    } else {
        console.log("The result is: " + multiply(num1, num2));
    }
}

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

prompt();