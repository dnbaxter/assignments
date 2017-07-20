var express = require("express");
var app = express();
var port = process.env.PORT || 8000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var addDino = require("./utils/dino");
app.use(addDino);



app.get("/", function (req, res) {
    console.log(req.dinosaur);
    res.send("It's working!")
});



app.listen(port, function () {
    console.log("Server is running on port " + port);
});