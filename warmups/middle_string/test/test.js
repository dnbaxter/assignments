let chai = require("chai");
let assert = chai.assert;

let middleStr = require("../app");


describe("A function that returns the two middles chars", () => {

    it("should return the two middle char's given an even length string", () => {
        assert.equal(middleStr("Jordan"), "rd");
        assert.equal(middleStr("candycanes"), "yc");
    });
    it("should throw an error when given an odd length string", () => {
        assert.throw(() => {middleStr("allen")}, "String is odd");
        assert.throw(() => {middleStr("jay")}, "String is odd");
    });
    it("should throw an error when given an empty string", () => {
        assert.throw(() => {middleStr("")}, "String is empty");
    });

});