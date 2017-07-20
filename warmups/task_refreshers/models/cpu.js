var mongoose = require("mongoose");

var cpuSchema = new mongoose.Schema({
    brand: String,
    title: String,
    description: String,
    price: Number,
    rating: Number,
    comments: [{
        user: String,
        review: String
    }]
});

var Cpu = mongoose.model("Cpu", cpuSchema);
module.exports = Cpu;