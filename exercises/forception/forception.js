var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var newArr = [];

for (var i = 0; i < alphabet.length; i++) {
    var i = alphabet.toUpperCase();
    arr = i.split('');
    
    for (var x = 0; x < people.length; x++) {
        newArr.push(people[x] + ": " + arr);
    }
}
console.log(newArr);