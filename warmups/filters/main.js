function evens(nums) {
    var evenNums = nums.filter(function (item, index, arr) {
        return item % 2 === 0;
    });
    return evenNums;
}
console.log("Even: " + evens([1, 2, 3, 4, 5]));

/**************************************************************************************************/

function odds(nums) {
    var oddNums = nums.filter(function (item) {
        return item % 2 !== 0;
    });
    return oddNums;
}
console.log("Odd: " + odds([1, 2, 3, 4, 5]));

/**************************************************************************************************/

var people = [
    {name: "Ross", age: 42},
    {name: "Jimmy", age: 12},
    {name: "John", age: 21}
];
function drinkingAge(people) {
    var oldEnough = people.filter(function (item) {
        return item.age >= 21;
    });
    console.log(oldEnough);
}
drinkingAge(people);

/**************************************************************************************************/

var menuItems = [
    {name: "Grilled Salmon with lemon and garlic butter crusted skin"},
    {name: "Fish Sticks"}
];
function fancyDishes(items) {
    var fancyMenu = items.filter(function (item) {
        return item.name.length > 30;
    });
    console.log(fancyMenu);
}
fancyDishes(menuItems);

/**************************************************************************************************/



/*
 * An array is considered "lengthy" if it has more than 4 items.
 * Given an array of arrays, return a new array of only the short arrays
 * from the original array of arrays.
 *
 * E.g.
 var stuff = [
 [1, 42, true, "fizz"],
 [2, 41, false, "buzz", {}],
 [false],
 [10, 11, 12, 13, 14]
 ];

 result: [
 [2, 41, false, "buzz", {}],
 [10, 11, 12, 13, 14]
 ];
 * */
var stuff = [
    [1, 42, true, "fizz"],
    [2, 41, false, "buzz", {}],
    [false],
    [10, 11, 12, 13, 14]
];
function shorts(arr) {
    var shortArr = arr.filter(function (array) {
        return array.length <= 4;
    });
    console.log(shortArr)
}
shorts(stuff);