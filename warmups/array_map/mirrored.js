function mirrored(arr) {
    var mirror = arr.map(function (num) {
        return parseInt(num + num.toString().split("").reverse().join(""))
    });
    console.log(mirror);
    return mirror;
}

mirrored([9, 13, 14, 42]);