var donations = [100, 5000, 8000, 9000];

var sum = donations.reduce(function (previousVal, currentVal) {

    return previousVal + currentVal;

}, 100);
// the 100 represents the initial value

console.log(sum);