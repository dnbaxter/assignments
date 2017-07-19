var mongoose = require("mongoose");

var bountyScheme = new mongoose.Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bounty: Number,
    type: String
});

var bounty = mongoose.model("bounty", bountyScheme);
module.exports = bounty;