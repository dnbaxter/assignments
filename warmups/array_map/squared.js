function squareRoot(arr) {
    var squared = arr.map(function (num) {
        return Math.sqrt(num);
    });
    console.log(squared);
    return squared;
}

squareRoot([10, 20, 30, 36, 69]);