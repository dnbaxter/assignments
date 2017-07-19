var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuidV4 = require("uuid/v4");
var port = 8000;

app.use(bodyParser.json());

var bounties = [
    {
        firstName: "Obi Wan",
        lastName: "Kenobi",
        living: true,
        bounty: 100000,
        type: "Jedi",
        _id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1"
    }
];


app.get("/bounties", function(req, res) {
    
    if (Object.keys(req.query).length) {
        var filteredBounties = bounties.filter(function(bounty) {
            return bounty.type.toLowerCase() === req.query.type.toLowerCase()
        });
        return res.send(filteredBounties)
    }
    return res.send(bounties);
    
});

app.get("/bounties/:bountyId", function(req, res) {
    
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i]._id == req.params.bountyId) {
            return res.send(bounties[i]);
        }
    }
    res.send("No bounty by that ID found.");
    
})

app.post("/bounties", function(req, res) {
    
    console.log("Post");
    req.body._id = uuidV4();
    bounties.push(req.body);
    res.send("Posted new bounty!");
    
});

app.put("/bounties/:bountyId", function(req, res) {
    
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i]._i == req.params.bountyId) {
            req.body._id = parseInt(req.params.bountyId);
            
            bounties[i] = req.body;
            return res.send(req.body);
        }
    }
    res.send("No bounty by that ID found.")
    
});

app.delete("/bounties/:bountyId", function(req, res) {
    
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i]._id == req.params.bountyId) {
            var removedBounty = bounties.splice(i, 1);
            return res.send(removedBounty);
        }
    }
    res.send("No bounty by that ID found.")
    
});




app.listen(port, function() {
    console.log("Server is running on port " + port);
});