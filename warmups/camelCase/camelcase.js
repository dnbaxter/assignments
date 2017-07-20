//var readline = require('readline-sync');

//function camelCase(str) {
//    var cap = false;
//    str = str.toLowerCase();
//    
//    for (i = 0; i < str.length; i++) {
//        if (str[i] === " " ||
//            str[i] === "_" ||
//            str[i] === "-") {
//            var nextLetter = str[i + 1];
//            var upperCaseLetters = nextLetter.toUpperCase();
//            str = str.replace(nextLetter, upperCaseLetters);
//            str = str.replace(' ', "");
//            str = str.replace('_', "");
//            str = str.replace('-', "");
//            
//            console.log(str);
//        }
//    }
//}


function camelCase(string) {
    let underscore = "_",
        hyphen = "-",
        space = " ";
    let newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === underscore ||
            string[i] === hyphen ||
            string[i] === space) {
            let char = string[i + 1];
            newString += char.toUpperCase();
            i++;
        } else {
            newString += string[i];
        };
    };
    console.log(newString);
    return;
}

camelCase("hello_world-good day")