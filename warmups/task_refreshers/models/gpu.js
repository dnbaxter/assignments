var mongoose = require("mongoose");

var gpuSchema = new mongoose.Schema({
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

var Gpu = mongoose.model("Gpu", gpuSchema);
module.exports = Gpu;
// OR
//module.exports = mongoose.model("Gpu", gpuSchema);



// locations: [{
//     street: String,
//     city: String,
//     state: String,
//     country: String,
//     coords: {
//         lat: Number,
//         long: Number
//     }
// }]