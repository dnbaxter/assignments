/***********************************************************
var readLineSync = require('readline-sync');


function checkLowest(input) {
    var x = readLineSync.question("Enter a number: ");
    var y = readLineSync.question("Enter another number: ");
    if (x > y) {
        console.log("The lowest was " + y + "\n")
    } else {
        console.log("The lowest was " + x + "\n")
    }
}

checkLowest();


************************************************************/

function addTwo(a, b) {
    return a + b
}
console.log("\n");
console.log(">> The two numbers added = " + addTwo(2, 4));
console.log("\n");

/************************************************************/

function comparison(a, b, c) {
    var smallest = Math.min(comparison);
    if (a < b && a < c) {
        smallest = a;
    } else if (b < c && b < a) {
        smallest = b;
    } else {
        smallest = c;
    }
    return smallest;
}
console.log(">> The lowest of the three numbers is: " + comparison(3, 4, 2));
console.log("\n");

/************************************************************/

function evenOrOdd(a) {
    if (a % 2 === 0) {
        return ">> Number is even"
    } else {
        return ">> Number is odd"
    }
}
console.log(evenOrOdd(2));
console.log("\n");

/************************************************************/

function lengthCheck(str) {
    console.log(">> String length is: " + str.length);
    var i = str.length / 2;

    if (str.length <= 20) {
        return ">> String is less than 20, thus: " + str + str;
    } else {
        return ">> String is longer than 20, so here's half: " + str.substr(0, i);
    }
}
console.log(lengthCheck("Hello world. How are you doing?") + "\n\n");

/************************************************************/

function fibonacci(n) {
    var a = 1,
        b = 0,
        temp;

    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
        console.log(">> " + a + " + " + b);
    }
    return b;
}
fibonacci(10);
//console.log(fibonacci(10));

/************************************************************/

function mostFrequent(elements) {
    console.log("\n");
    var bins = {};
    for (var i = 0; i < elements.length; i++) {
        bins[elements[i]] = (bins[elements[i]] || 0) + 1;
    }
    var max = 0;
    for (var y in bins) {
        max = Math.max(max, bins[y]);
    }
    console.log(bins)
    return max;
}
console.log(mostFrequent("Hellooooo"));



var readLineSync = require('readline-sync');