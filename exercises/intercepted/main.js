var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.json());

var addFruit = require("./utils/fruit");
app.use(addFruit);


app.get("/", function (req, res) {
    console.log(req.fruit);
    res.send("We are connected!")
});


app.listen(port, function (req, res) {
    console.log("Server is running on port " + port);
});