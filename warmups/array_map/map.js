var nums = [1, 2, 3, 4, 5];

var tens = nums.map(function (item, index, array) {
    return item * 10;
});
console.log(tens);
//or
function multiplyByTen(arr) {
    var tens = arr.map(function (item, index, array) {
        return item * 10;
    });
    console.log(tens);
    return tens;
}
multiplyByTen([1, 2, 3, 4, 5]);
multiplyByTen([6, 7, 8, 9, 10]);