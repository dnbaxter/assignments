var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var kittens = [];

app.get("/cars", function(req, res) {
    // req = request
    // res = response
    //get a list of cars
    
    res.send([{make: "Tesla", model: "S"}])
    
});

app.get("/kittens", function(req, res) {

    //get a list of kittens
    res.send(kittens);
    
});

app.post("/kittens", function(req, res) {
    //post to kittens
    //console.log(req.body);
    kittens.push(req.body);
    res.send("It worked!");
    
});

app.delete("/kittens", function(req, res) {
    
    
    
});


app.listen(8080, function() {
    console.log("Server is running on port 8080.")
});