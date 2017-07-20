let add = (num1, num2) => (num1 + num2);
console.log(add(1, 5));

class Animal {
    constructor(head="Human", body="Lion") {
        this.head = head;
        this.body = body;
    }
    print() {
        console.log(`I am ${this.head} ${this.body}`);
    }
}

let hedgehog = new Animal("hedgehog", "ostrich");
hedgehog.print();