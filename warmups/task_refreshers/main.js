var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");

// connects mongoose to database
mongoose.connect("mongodb://localhost/computerparts");


//SCHEMAS
// //creates new object for database
// var asus = new Gpu ({
//     brand: "Asus",
//     title: "GTX 1070 Ti",
//     description: "Power-house baby",
//     price: 300,
//     rating: 9.6
// });
// // saves the new object
// asus.save();









app.use(morgan("dev"));
app.use(bodyParser.json());

// middleware that informs us in console that we're connecting to the database
app.use("/api", function (req, res, next) {
    console.log("Accessing the API");
    next();
});

// connected routes to be used when requested
app.use("/api/graphiccards", require("./routes/graphicsCards"));
app.use("/api/computerprocessors", require("./routes/computerProcessors"));





// server startup
app.listen(port, function () {
    console.log("Server is running on port " + port);
});