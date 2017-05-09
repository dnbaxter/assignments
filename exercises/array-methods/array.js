var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("\nfruit: ", fruit);
console.log("vegetables: ", vegetables + "\n");


// splices and removes index 3 from vegetables and 0 from fruit
vegetables.splice(3, 1);
fruit.splice(0, 1);


// obtains the index of orange within fruit
var index = fruit.indexOf("orange");


// pushed the index of orange at the end of fruits
fruit.push(index);



//console.log(vegetables.length);
vegetables.push(3);


// concat adds the two arrays together, starting with fruit first
var food = fruit.concat(vegetables);
food.splice(4, 2);


// reverses the array
var reversed = food.reverse();
console.log(food.toString() + "\n");
