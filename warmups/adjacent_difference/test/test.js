let chai = require("chai");
let assert = chai.assert;
let getCombined = require("../app");


let tests = {
    allTheSameLength: ["hold", "door", "love", "crap"],
    allEmpty: ["", "", "", ""],
    tooShort: ["", ""],
    generic: ["a", "ab", "abc", "abcd", "sfgs", "ddfgsdfse", "edm"]
};

describe("Adjacent lengths test", () => {

    it("should return the first set of 3 adjacent elements if they are all the same length", () => {
        assert.deepEqual(getCombined(tests.allTheSameLength), ["hold", "door", "love"]);
        assert.deepEqual(getCombined(tests.allEmpty), ["", "", ""]);
    });
    it("should return an error if the array is shorter than 3", () => {
        assert.throw(() => {getCombined(tests.tooShort)}, "input is too short");
    });
    it("should return an array of the longest combined adjacent elements", () => {
        assert.deepEqual(getCombined(tests.generic), ["abcd", "sfgs", "ddfgsdfse"])
    });

});