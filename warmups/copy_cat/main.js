var food = [
    {name: "Banana", color: "Yellow"},
    {name: "Strawberry", color: "Red"},
    {name: "Blueberry", color: "Blue"},
    {name: "Orange", color: "Orange"}
];

function foodObj(obj) {
    var newObj = {};
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

console.log(foodObj(food));