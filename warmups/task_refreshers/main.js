var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
var morgan = require("morgan");
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", function (req, res, next) {
    console.log("Accessing the API");
    next();
});

app.use("/api/graphiccards", require("./routes/graphicsCards"));
app.use("/api/computerprocessors", require("./routes/computerProcessors"));





app.listen(port, function () {
    console.log("Server is running on port " + port);
});