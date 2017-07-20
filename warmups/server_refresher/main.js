var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", function (req, res, next) {
    console.log("Accessing the API");
    next();
});

//app.use("/api", expressJwt());
// will learn for user authentication

app.use("/api/vegetables", require("./routes/vegatablesRoutes"));
app.use("/api/fruits", require("./routes/fruitsRoute"));







app.listen(port, function () {
    console.log("The server is running on port " + port);
});