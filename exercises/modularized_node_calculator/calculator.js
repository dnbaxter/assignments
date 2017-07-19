var readline = require('readline-sync');
var operation = require("./operations.js");
//console.log(operation.add(1, 2));

function prompt() {
var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");
    var operations = readline.question("Please enter the desired operation. [+], [-], [/], [*], or [^]: ");

    if (operations === "+") {
        console.log("The result is: " + operation.add(num1, num2));
    } else if (operations === "-") {
        console.log("The result is: " + operation.subtract(num1, num2));
    } else if (operations === "/") {
        console.log("The result is: " + operation.divide(num1, num2));
    } else if (operations === "*") {
        console.log("The result is: " + operation.multiply(num1, num2));
    } else {
        console.log("The result is: " + operation.exponentiation(num1, num2));
    }
}
prompt();