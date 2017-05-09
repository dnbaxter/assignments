var readline = require('readline-sync');

//var prompt = readline.question("Please type in a message: ");
//var prompt2 = readline.question("Please enter a second message: ");
//var longMessage = readline.question("Please enter a full sentence: ");
//console.log(prompt.toUpperCase());
//console.log("Your first message is '" + prompt.length + "' characters long");
//
//var joined = prompt.concat(prompt2);
//console.log(joined);
//
//var i = longMessage.length / 2;
//var y = longMessage.length / 2;
//
//    if (longMessage.length > 20) {
//        console.log(longMessage.substr(y, i));
//    }

console.log("\n\n>>  Hello there, my name is Dustin! Help me get to know you better by telling me your name\n");
var fName = readline.question(">>  What is your first name? \n");
var lName = readline.question(">>  And your last name? \n");
console.log("\n>>  Awesome! Nice to meet you " + fName.toUpperCase() + ".\n\n");
console.log(">>  I am pretty old in some ways for most computers, I am 29. How old are you " + fName + "?");
var age = readline.question("");
console.log(">>  You're " + age + "? That's fantastic! You look so young" + fName + "!\n\n");
var message = readline.question(">>  Tell me more about yourself and I'll do my best to remember it all, like what do you like to do, or what are you currently doing with your life?\n");

console.log(">>  Your message was " + message.length + " characters long.\n");
var i = message.length / 2;
var y = message.length / 2;

    if (message.length > 20) {
        console.log(">>  I honestly think I was only able to remember the last half of your message which was: [" + message.substr(y, i) + "]... I am really sorry!");
    } else {
        console.log(">>  I honestly think I was only able to remember the last half of your message which was: [" + message + "]... I am really sorry!");
    }

console.log("With that being said, I probably actually remembered more. Where would you like me to restate your message. Give me an index between [0-" + message.length + "]:");
var messageIndex = readline.question("");

console.log(message.substr(messageIndex, message.length));