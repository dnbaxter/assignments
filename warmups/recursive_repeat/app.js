//recursive functions call themselves
//recursive functions need a way to stop themselves

//5! = 5 * 4 * 3 * 2 * 1

// let factorial = function(num) {
//     if (num === 1) {
//         return num;
//     } else if (num === 0) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// };
//
// //3 * 2 * 1
//
// console.log(factorial(10));

let repeat = function (str, count) {
    if (count === 1) {
        return str;
    } else {
        // let x = str + repeat(str, count - 1);
        // console.log(x);
        // return x;
        return str + repeat(str, count - 1)
    }

};
console.log(repeat("WTF", 4));