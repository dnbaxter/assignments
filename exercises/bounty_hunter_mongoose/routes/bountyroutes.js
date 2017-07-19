var express = require("express");
var bountyRoutes = express.Router();
var Bounty = require("../models/bounties");


bountyRoutes.get("/", function (req, res) {
    Bounty.find(function (err, bounties) {
        if (err) return res.status(500).send(err);
        return res.send(bounties);
    });
});

bountyRoutes.post("/", function (req, res) {
    var bounty = new Bounty(req.body);
    bounty.save(function (err, newBounty) {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newBounty);
    });
});

bountyRoutes.get("/:id", function (req, res) {
    Bounty.findById(req.params.id, function (err, bounty) {
        if (err) return res.status(500).send(err);
        return res.send(bounty);
    });
});

bountyRoutes.put("/:id", function (req, res) {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedBounty) {
        if (err) return res.status(500).send(err);
        return res.send(updatedBounty);
    });
});

bountyRoutes.delete("/:id", function (req, res) {
    Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
        if (err) return res.status(500).send(err);
        return res.send(bounty + "\n\nDeleted!");
    });
});

module.exports = bountyRoutes;