// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var db = require("../models");
// Required by the bcrypt package
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

	app.post("/login", function(req, res) {
  		
  		var userLogin = req.body.email;
  		var userPassword = req.body.password;
  		console.log(userLogin);
  		db.User.findOne({
	        where: {
	          user_name: userLogin
	        }
	    }).then(function(result) {
	      	var passwordConfirmation;
	      	//grabs users password from db
	      	var hash = result.dataValues.user_password;
	      	//compares db password and user entered password
			bcrypt.compare(userPassword, hash, function(err, result) {
				// will return true or false depending if the passwords matched up
			    passwordConfirmation = result;
			    res.json(passwordConfirmation);
			});
	    });
	});

	app.post("/create", function(req, res) {
		var password = req.body.password;
		bcrypt.hash(password, null, null, function(err, hash) {

	    	// Store hash in your password DB.
	    	db.User.create({
		      user_name: req.body.email,
		      user_password: hash
		    }).then(function() {
		      // We have access to the new todo as an argument inside of the callback function
		      res.json(true);
		    });
		});        
	});
};
