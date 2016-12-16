// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var db = require("../models");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.post("/login", function(req, res) {
  		
  		var userLogin = req.body.email;
  		var userPassword = req.body.password;
  		console.log(userLogin);
  		db.User.findOne({
	        where: {
	          user_name: userLogin
	        }
	      }).then(function(result) {
	      	var backendPass = result.dataValues.user_password;
	      	console.log(result.dataValues.user_password)
	        if(userPassword === backendPass){
	        	//sends back true 
	        	res.json(true);
	        } else{
	        	//sends back a false that will not allow the page to refresh
	        	res.json(false);
	        }
	      });

        
	});

	app.post("/create", function(req, res) {
		
  		db.User.create({
	      user_name: req.body.email,
	      user_password: req.body.password
	    }).then(function() {
	      // We have access to the new todo as an argument inside of the callback function
	      res.json(true);
	    });
        
	});


	// // get route for log in 
 //  app.post("/login/manual", function(req, res) {
 //  	var userLogin = req.body.user_name;
 //  	db.User.findOne({
 //        where: {
 //          user_name: userLogin
 //        }
 //      }).then(function(result) {
 //        return res.json(result);
 //        console.log(result)
 //      });
 //  });
};
