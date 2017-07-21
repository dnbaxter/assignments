let chai = require("chai");
let assert = chai.assert;

let framer = require("../app.js");

describe("Framer that frames words", () => {
    it("should frame a word in a multi dimensional array surrounded by '*'", () => {
    assert.deepEqual(framer("Jacob"), [
        ["*","*","*","*","*","*","*"],
        ["*","J","a","c","o","b","*"],
        ["*","*","*","*","*","*","*"],
    ]);
    assert.deepEqual(framer("Kacie"), [
        ["*","*","*","*","*","*","*"],
        ["*","K","a","c","i","e","*"],
        ["*","*","*","*","*","*","*"],
    ]);
});
});