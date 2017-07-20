function spotTheDiff(a, b) {

    var newArr = [];
    var check;

    for(var i = 0; i < a.length; i++) {
        check = b.indexOf(a[i]);
        if (check === -1) {
            newArr.push(a[i]);
        }
    }
    for (var i = 0; i < b.length; i++) {
        check = a.indexOf(b[i]);
        if (check === -1) {
            newArr.push((b[i]))
        }
    }
    return newArr

}
console.log(spotTheDiff([1, 2, 3, 4], [2, 3, 4, 8, 5]));




var difference = function (arr) {
    var ret = [];
    for (arrIndex = 0; arrIndex < arr.length; arrIndex++) {
        var firstArray = arr[arrIndex];
        for (var i = 0; i < firstArray.length; i++) {
            for (var secondArrIndex = 0; secondArrIndex < arr.length; secondArrIndex++) {
                var secondArray = arr[secondArrIndex];
                var val = firstArray[i];
                if (secondArray.indexOf(val) == -1 && ret.indexOf(val) == -1) {
                    ret.push(val);
                }
            }
        }
    }
    return ret;
}

console.log(difference([[1, 2, 3, 6], [2, 3, 4, 5]])); // returns [1,6,4,5]