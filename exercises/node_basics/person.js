function Person(name, age) {
    this.name = "Jane";
    this.age = 42;
    this.speak = function() {
        console.log("Hi, my name is " + 
                    this.name + " and I'm " 
                    + this.age + " years old.");
    }
}

module.exports = new Person();
//module.exports = Person;