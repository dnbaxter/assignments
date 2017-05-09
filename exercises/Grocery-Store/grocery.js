var shopper = {
    firstName: "Joe Biden",
    age: 42,
    money: false,
    
    groceryCart: ["pie", "bananas", "milk", "chicken", "fruit punch"],
    
    myMethod: function() { console.log("Hello yummy food!"); }
}

console.log(shopper.groceryCart[0]);
shopper.myMethod();