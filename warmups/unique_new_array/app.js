var lengthFour = [1, 2, 4, 6];
var lengthFive = [4, 9, 11, 6, 7];
var emptyArray = [];
var dupeArray = [1, 9, 5, 9, 0];

function compareArray(array, arrayTwo) {
    var compareOne;
    var compareTwo;
    for (var i = 0; i < array.length; i++) {
        compareOne = array[i];
        //console.log(compareOne);
        for (var j = 0; j < arrayTwo.length; j++) {
            compareTwo = arrayTwo[j];
            //console.log(compareTwo);
            if (compareOne === compareTwo) {
                arrayTwo.splice(j, 1);
                array.splice(i, 1);
                i--;
                j--;
            }
        }
    }
    var newArray = array.concat(arrayTwo);
    console.log(newArray);
}

compareArray(lengthFour, lengthFive);
//compareArray(lengthFour, emptyArray);
//compareArray(dupeArray, lengthFive);