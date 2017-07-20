function seeingDouble(arr) {
    var getDuplicate = arr.map(function (num) {
        return parseInt(num.toString() + num.toString())
    });
    console.log(getDuplicate);
    return getDuplicate;
}

seeingDouble([5, 7, 9, 11, 13]);