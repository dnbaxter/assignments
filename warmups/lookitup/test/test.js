//import { assert } from "chai";
let chai = require("chai");
let assert = chai.assert;
//// line 1 breaks down 2 and 3 into a single line. ////

//import { addWord, lookItUp } from "../app";
//import code
let addWord = require("../app").addWord;
let lookItUp = require("../app").lookItUp;
//// line 5 breaks down line 8 and 9 into a single line. ////

describe("A dictionary to add and lookup words", () => {
    it("should store the word when added", () => {
    addWord("blueberry", "a blue berry");
    assert.equal(lookItUp("blueberry"), "a blue berry");
});
    it("should return null when we lookup a word not present", () => {
        assert.equal(lookItUp("flabbergasted"), null);
        assert.equal(lookItUp("building"), null);
    });
});