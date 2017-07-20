var express = require("express");
var trailRoutes = express.Router();
var Trail = require("../models/trailschema");

trailRoutes.get("/", function (req, res) {
    Trail.find(function (err, trails) {
        console.log("Getting trails.");

        if (err) return res.status(500).send(err);
        return res.send(trails);
    })
});

trailRoutes.post("/", function (req, res) {
    var trail = new Trail(req.body);
    trail.save(function (err, newTrail) {
        console.log("Posting new trail " + newTrail);

        if (err) return res.status(500).send(err);
        return res.status(201).send(newTrail);
    })
});

trailRoutes.get("/:id", function (req, res) {
    Trail.findById(req.params.id, function (err, trail) {
        console.log("Getting trail " + trail);

        if (err) return res.status(500).send(err);
        return res.send(trail);
    });
});

trailRoutes.put("/:id", function (req, res) {
    Trail.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedTrail) {
        console.log("Updating trail  " + updatedTrail);

        if (err) return res.status(500).send(err);
        return res.send(updatedTrail);
    });
});

trailRoutes.delete("/:id", function (req, res) {
    Trail.findByIdAndRemove(req.params.id, function (err, trail) {
        console.log("Deleting trail " + trail);

        if (err) return res.status(500).send(err);
        return res.send(trail + "\n\nDeleted!");
    });
});



module.exports = trailRoutes;