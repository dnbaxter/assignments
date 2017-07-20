/**
 * Created by dustinoman on 6/16/17.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8181;
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require("path");

mongoose.connect("mongodb://localhost/trails");

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));
app.use("/trails", require("./routes/trailroutes"));



app.listen(port, function () {
    console.log("Server is currently running on port " + port)
});