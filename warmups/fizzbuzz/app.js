let fizzBuzz = () => {
    let results = [];

    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBizz");
        } else if (i % 3 === 0) {
            results.push("Fizz");
        } else if (i % 5 === 0) {
            results.push("Buzz")
        } else {
            results.push([i]);
        }
    }
    return results;
};

console.log(fizzBuzz());

module.exports = fizzBuzz;