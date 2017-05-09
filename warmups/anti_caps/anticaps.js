var antiCaps = function (letters) {
    var newLetters = "";
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
            //console.log(newLetters);
        } else {
            newLetters += letters[i].toLowerCase();
            //console.log(newLetters);
        }
    }
    console.log(newLetters);
}

antiCaps("Hello");
antiCaps("racEcar");
antiCaps("bAnAnA");


var text = 'So, today we have REALLY good day';

var ans = text.split('').map(function(callback){
  return callback === callback.toUpperCase() ? callback.toLowerCase() : callback.toUpperCase()
//  return callback === 
//  declaring variable that's being tested
//    callback.toUpperCase() 
//    if condition: 
//    ? callback.toLowerCase() 
//    if true === result
//    : callback.toUpperCase()
//    else  === result
}).join('')

console.log(ans)
