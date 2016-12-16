
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

//Require our models for syncing
var db = require("./app/models");

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/app/public"));

// ==============================================================================
// Mysql CONFIGURATION
// This sets up the basic connections for our server
// ==============================================================================

// connect to the MySql Database
// var connection = require("./app/routing/connection.js")

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
//Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
});



