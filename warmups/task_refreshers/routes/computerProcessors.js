var express = require("express");
var cProcessorRoutes = express.Router();

cProcessorRoutes.get("/", function (req, res) {
    res.send("Here is a list of powerful CPUs");
});

cProcessorRoutes.post("/", function (req, res) {

});

cProcessorRoutes.get("/:id", function (req, res) {

});

cProcessorRoutes.put("/:id", function (req, res) {

});

cProcessorRoutes.delete("/:id", function (req, res) {

});

module.exports = cProcessorRoutes;