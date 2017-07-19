var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 7555;
var mongoose = require("mongoose");
var morgan = require("morgan");


// connects mongoose to database
mongoose.connect("mongodb://localhost/reddit");


app.use(morgan("dev"));
app.use(bodyParser.json());



app.use("/users", require("./routes/userRoutes"));






app.listen(port, function () {
    console.log("The server is running on port " + port);
});