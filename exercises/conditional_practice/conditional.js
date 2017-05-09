var readLineSync = require('readline-sync');

/*****************************************************/

//function pickSmallest() {
//    var x = 11;
//    var y = 5;
//
//    if (x >= y) {
//        console.log(y);
//    } else {
//        console.log(x);
//    }
//}
//
//pickSmallest();

/*****************************************************/

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

/*****************************************************/

var aSmile = false;
var bSmile = false;

function monkeyTrouble(aSmile, bSmile) {


    if (aSmile && bSmile === true) {
        return true;
    } else if (aSmile && bSmile === false) {
        return true;
    } else {
        return false;
    }
}

console.log(monkeyTrouble(true, true)); // true  
console.log(monkeyTrouble(false, false)); // true  
console.log(monkeyTrouble(true, false)); // false

/*****************************************************/

////function timeOfDay() {
////    var time = 13;
////    
////    if (time > 0 && time < 12) {
////        console.log("Good morning!")
////    } else if (time > 11 && time < 18) {
////        console.log("Good afternoon!") 
////    } else {
////        console.log("Good evening!")
////    }
////}
//
//timeOfDay();

/*****************************************************/

function doStuff(input) {
    //    console.log("Enter a number: ");
    var n1 = readLineSync.question("\nEnter the time of day: ");
    //    console.log("Enter another one: ");
    //    var n2 = readLineSync.question('Enter another number: ');
    
    if (n1 < 0 || n1 > 24) {
        console.log("Invalid entry")
    }

    
    if (n1 > 0 && n1 < 12) {
        console.log("Good morning!\n")
    } else if (n1 > 11 && n1 < 18) {
        console.log("Good afternoon!\n")
    } else if (n1 > 18 && n1 < 25) {
        console.log("Good evening!\n")
    }
    //console.log("You entered " + n1 + " and " + n2 + "\n");
}

doStuff();

/*****************************************************/
var readLineSync = require('readline-sync');