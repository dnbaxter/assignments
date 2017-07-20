let chai = require ("chai");
let assert = chai.assert;
let ipAddress = require("../app.js");
let errorMessage = "invalid ip address";

describe("IP address test",()=>{

    it("should return an error if it is an invalid IP address",()=>{
        //includes non-digits except for periods
        assert.throws(()=>{ipAddress("acb.ertg.wer.e")}, errorMessage);
        //a not within range of 0 - 255
        assert.throws(()=>{ipAddress("355.0.0.1")}, errorMessage);
        //doesnt contain 3 periods
        assert.throws(()=>{ipAddress("123.135.2")}, errorMessage);
        //not within range of 7-15 characters
        assert.throws(()=>{ipAddress("1.3.4.")}, errorMessage);
    });
    it("should return if a vlid IP address",()=>{
        assert.equal(ipAddress("0.0.0.0"), true);
        assert.equal(ipAddress("127.0.0.1"), true);
        assert.equal(ipAddress("255.0.255.0"), true);
        assert.equal(ipAddress("120.45.67.12"), true);
        assert.equal(ipAddress("100.100.100.100"), true);
    });

});