function doubles(arr) {
    var double = arr.map(function (num) {
        return num * 2;
    });
    console.log(double);
    return double;
}

doubles([1, 2, 3, 4, 5]);