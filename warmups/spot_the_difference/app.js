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