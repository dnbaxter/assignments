let chai = require("chai");
let assert = chai.assert;

//import code
let doubleX = require("app/app");

describe("Testing doubleX", () => {
    it("should return true if first x is followed by x", () => {
        assert.equal(doubleX("xx"), true);
        assert.equal(doubleX("exxtra"), true);
    });
    it("should return false if the first x is not followed by x", () => {
        assert.equal(doubleX("!"), false);
        assert.equal(doubleX("x"), false);
        assert.equal(doubleX("xjxx"), false);
    });
});