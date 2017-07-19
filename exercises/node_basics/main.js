var fs = require("fs");
var readline = require("readline-sync");


//var myFunc = require("./hi.js");
//
//myFunc("Dustin");

//var myObj = require("./hi.js"); //grabs file name
//
//myObj.sayHi("Dustin"); // call the function within the object
//myObj.sayBye("Dustin"); // call the function within the object



var person = require("./person.js");
person.speak();

var Person = require("./person.js");
//var jake = new Person("Jake", 50);