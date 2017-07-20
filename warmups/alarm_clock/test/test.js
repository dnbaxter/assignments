let chai = require("chai");
let assert = chai.assert;
let timeNumToText = require("../app");

describe("Number to text clock", () => {

    it("should given the input of xx:xx amd return the time in words", () => {
        assert.equal(timeNumToText("00:00"), "It's twelve am");
        assert.equal(timeNumToText("20:29"), "It's eight twenty nine pm");
    });
    it("should throw an error if given a time in the wrong format", () => {
        assert.throw(() => {timeNumToText("Hello")}, "Not a valid input");
    })

});