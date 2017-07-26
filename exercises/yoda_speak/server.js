var express = require("express");
var app = express();
var port = process.env.PORT || 8181;
var path = require("path");




app.use(express.static(path.join(__dirname, "public")));


app.listen(port, function () {
    console.log("Server is currently running on port " + port)
});