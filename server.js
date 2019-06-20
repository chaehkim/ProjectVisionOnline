var express = require('express');
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./controllers/gameplan_controller.js");

app.use("/", routes);

app.listen(port);
