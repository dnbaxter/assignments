var mongoose = require("mongoose");

var trailSchema = new mongoose.Schema({

    trailName: String,
    difficulty: Number,
    rating: Number,
    location: [
        {
            longitude: Number,
            latitude: Number
        }
    ],
    state: String,
    city: String,
    imgUrl: String

});

var trail = mongoose.model("trail", trailSchema);
module.exports = trail;