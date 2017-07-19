/*
 * Given an array of integers, return the product (multiplication) of
 * all the numbers in the array
 * */

var products = [5, 10, 20, 40];

function findProduct(arr) {

    var sum = arr.reduce(function (previousVal, currentVal) {
        //console.log(previousVal);
        //console.log(currentVal);
        return previousVal * currentVal;
    });
    return sum;

}

console.log(findProduct(products));