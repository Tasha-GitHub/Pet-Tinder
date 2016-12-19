// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var db = require("../models");
// Required by the bcrypt package
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);
var userId;
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	//logs user in
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
	      	//captures userID in a variable
	      	userId = result.id;
	      	//grabs users password from db
	      	var hash = result.dataValues.user_password;
	      	//compares db password and user entered password
			bcrypt.compare(userPassword, hash, function(err, result) {
				// will return true or false depending if the passwords matched up
			    passwordConfirmation = result;
			    //sends a true and user id back to the front end
			    res.json({confirm: passwordConfirmation, result: userId });
			});
	    });
	});
	//creates a new login
	app.post("/create", function(req, res) {
		var password = req.body.password;
		bcrypt.hash(password, null, null, function(err, hash) {
	    	// Store hash in your password DB.
	    	db.User.create({
		      user_name: req.body.email,
		      user_password: hash
		    }).then(function(result) {
		    	userId = result.id;
		      // We have access to the new todo as an argument inside of the callback function
		      res.json({confirm: true, result: userId });
		    });
		});        
	});
	//deletes adopted pet
	app.delete("/delete_pet",function(req, res){
		var petId = req.body.id;
		//deletes the specified pet
		db.Pet.destroy({
	      where: {
	        id: petId
	      }
	    }).then(function(response) {
	    	//response will send back a 1 or 0 depending if the id was present in the database, 
	    	//use this output to control the response to the front end
	    	if(response === 0){
	    		res.json(false);
	    	}else{
	    		res.json(true);
	    	}
	      
	    });

	});
	//creates a new pet
	app.post("/create_pet",function(req, res){
		console.log(req.body);
		var petName = req.body.name;
		var petAge = req.body.age;
		var petBreed = req.body.breed;
		var petColor = req.body.color;
			//creates a new pet given front end inputs
			db.Pet.create({
		      pet_name: petName,
		      pet_age: petAge,
		      pet_breed: petBreed ,
		      pet_color: petColor
		    }).then(function() {
		      //send back a response of true when successfully created a pet
		      res.json(true);
		    });

	});
};
