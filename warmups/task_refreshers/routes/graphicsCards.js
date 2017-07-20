var express = require("express");
var gCardRoutes = express.Router();
var Gpu = require("../models/gpu");

gCardRoutes.get("/", function (req, res) {
    //callback function
    Gpu.find(function (err, gpus) {
        // if (err) {
        //     return res.status(500).send(err);
        // } else {
        //     return res.send(gpus);
        // }
        //console.log(gpus);
        return res.send(gpus);
    });
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