let chai = require("chai");
let assert = chai.assert;

//import code
let matchingWords = require("./index");

describe("Test Matching Words", function () {
    it("should return an array of repeated words", function () {
        assert.deepEqual(matchingWords("hello hello there"), ["hello"]);
        assert.deepEqual(matchingWords("allen allen jacob jacob"), ["allen", "jacob"]);
        assert.deepEqual(matchingWords("hello its me youre looking for hello again me"), ["hello", "me"]);
    });
    it("should return an empty array when no words are repeated", function () {
        assert.deepEqual(matchingWords("hello I dont know why you say goodbye"), []);
    });
});