function Car(engine, wheels, doors, color) {
    this.engine = engine;
    this.wheels = wheels;
    this.doors = doors;
    this.color = color;
    this.shout = function() {
        console.log("I'm shouting softly.")
    }
}

var myCar = new Car("V8", "Medium", 2, "Matte Black");

console.log(myCar);
car.shout();