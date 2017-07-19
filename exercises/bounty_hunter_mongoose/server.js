var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 7171;
var mongoose = require("mongoose");
var morgan = require("morgan");
var path = require('path');

mongoose.connect("mongodb://localhost/bounties");

app.use(morgan("dev"));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname)));
app.use("/bounties", require("./routes/bountyroutes"));





app.listen(port, function () {
    console.log("Server is running on port " + port);
});