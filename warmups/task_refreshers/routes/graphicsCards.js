var express = require("express");
var gCardRoutes = express.Router();

gCardRoutes.get("/", function (req, res) {
    res.send("Here is a list of awesome graphics cards!");
});

gCardRoutes.post("/", function (req, res) {

});

gCardRoutes.get("/:id", function (req, res) {

});

gCardRoutes.put("/:id", function (req, res) {

});

gCardRoutes.delete("/:id", function (req, res) {

});

module.exports = gCardRoutes;