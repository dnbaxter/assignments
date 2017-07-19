var express = require("express");
var app = express();
var port = process.env.PORT || 8000; // allow user to change the port
                                     // otherwise use port 8000
var uuidV4 = require("uuid");

var bodyParser = require("body-parser");
app.use(bodyParser.json());


var flightlessBirds = [
    {
        _id: 1,
        name: "Penny",
        type: "Penguin"
    },
    {
        _id: 2,
        name: "Dumbo",
        type: "Dodo"
    },
    {
        _id: 3,
        name: "Kiki",
        type: "Kiwi"
    }
];

app.get("/flightless-birds", function(req, res) {
    
    if (Object.keys(req.query).length) {
        var filteredBirds = flightlessBirds.filter(function(bird) {
            return bird.type.toLowerCase() === req.query.type.toLowerCase()
        });
        return res.send(filteredBirds);
    }
    return res.send(flightlessBirds);
    
});
app.get("/flightless-birds/:birdId", function(req, res) {
    
    for (var i = 0; i < flightlessBirds.length; i++) {
        if (flightlessBirds[i]._id == req.params.birdId) {
            return res.send(flightlessBirds[i]);
        }
    }
    res.send("No bird with that ID found.");
    
});

app.post("/flightless-birds", function(req, res) {
    
    req.body._id = uuidV4();
    flightlessBirds.push(req.body);
    return res.send(req.body);
    
});

app.put("/flightless-birds/:birdId", function(req, res) {
    
    for (var i = 0; i < flightlessBirds.length; i++) {
        if (flightlessBirds[i]._id == req.params.birdId) {
            
            req.body._id = parseInt(req.params.birdId);
            
            flightlessBirds[i] = req.body;
            return res.send(req.body);
        }
    }
    res.send("No bird with that ID found.");
    
});

app.delete("/flightless-birds/:birdId", function(req, res) {
    
    for (var i = 0; i < flightlessBirds.length; i++) {
        if (flightlessBirds[i]._id == req.params.birdId) {
            var removedBird = flightlessBirds.splice(i, 1);
            return res.send(removedBird);
        }
    }
    res.send("No bird with that ID found.");
    
});




app.listen(port, function() {
    
    console.log("Server is running on port " + port);
    
});