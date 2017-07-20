let chai = require("chai");
let assert = chai.assert;
let onVacation = require("../app");

describe("Vacation Test", () => {

    it("should return true if on vacation", () => {
        assert.equal(onVacation("Monday", true), true);
        assert.equal(onVacation("Sunday", true), true);
    });
    it("should return false if vacation is false and is a weekday", () => {
        assert.equal(onVacation("Tuesday", false), false);
    });
    it("should return true if it is not a weekday", () => {
        assert.equal(onVacation("Saturday", true), true);
    });

});