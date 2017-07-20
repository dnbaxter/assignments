// let adjacentDiff = (arr) => {
//
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = [];
//         let test = arr[i];
//         let length = test.length;
//         for(let x = 0; x < arr.length; x++) {
//             if(arr[i] > arr[x]) {
//                 newArr.push(arr[i])
//                 // console.log(arr[i].length)
//             } else {
//                 //console.log(arr[x])
//             }
//         }
//         console.log(newArr);
//
//     }
// };
//
// adjacentDiff(["asdasdad", "adas", "dasds"]);
//module.exports = adjacentDiff;








adjacentDifference = (arr) => {

    let longest = -1;
    let output = [];

    if(arr.length < 3) {
        throw "input is too short";
    }

    for(let i = 1; i < arr.length -1; i++) {
        let left = arr[i - 1];
        let center = arr[i];
        let right = arr[i + 1];
        let total = left.length + center.length + right.length;

        if(total > longest) {
            longest = total;
            output = [left, center, right];
        }
    }
    return output;
};
module.exports = adjacentDifference;