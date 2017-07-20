let chai = require("chai");
let assert = chai.assert;
let balancePara = require("../app");
let noOpening = ")dadsdf))";
let noClosing = "((idsifsiifsd)";
let matching = "((fhsdfjhdsjf))";


describe("balancing parenthesis", () => {

    it("should return false if there's closing parenthesis without an opening one", ()=> {
        assert.equal(balancePara(noOpening), false);
    });
    it("should return false if there's not enough closing parenthesis", () => {
        assert.equal(balancePara(noClosing), false);
    });
    it("should return true if each opening parenthesis has matching closing parenthesis", () => {
        assert.equal(balancePara(matching), true);
    });

});