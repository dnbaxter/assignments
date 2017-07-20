var express = require("express");
var fruitRoutes = express.Router();

fruitRoutes.get("/", function (req, res) {
    res.send("Here's a bunch of fruit!")
});
fruitRoutes.post("/", function (req, res) {

});
fruitRoutes.get("/:id", function (req, res) {

});
fruitRoutes.put("/:id", function (req, res) {

});
fruitRoutes.delete("/:id", function (req, res) {

});

module.exports = fruitRoutes;