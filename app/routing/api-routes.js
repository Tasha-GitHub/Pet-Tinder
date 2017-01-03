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
		var petGender = req.body.gender;
		var petSize = req.body.size;
		var petPhoto = req.body.photo;
		var petType = req.body.type;
		var petDescription = req.body.description;
			//creates a new pet given front end inputs
		db.Pet.create({
		    pet_name: petName,
		    pet_age: petAge,
		    pet_breed: petBreed,
		    pet_color: petColor,
		    pet_gender: petGender,
		    pet_size: petSize,
		    pet_photo: petPhoto,
		    pet_type: petType,
		    pet_description: petDescription
		}).then(function() {
		    //send back a response of true when successfully created a pet
		    res.json(true);
		});
	});

	app.get("/all", function(req, res){
		db.Pet.findAll({})
        .then(function(result) {
           return res.json(result);
        });

	});

	app.get("/search/:type?/:age?/:size?/:gender?", function(req, res){
		var type = req.params.type;
		var age= req.params.age;
		var size = req.params.size;
		var gender= req.params.gender;
		//console.log(type + age + size + gender);
		db.Pet.findAll({
			where: {
				pet_type: type,
				pet_age : age,
				pet_size : size,
				pet_gender : gender
			}
		})
        .then(function(result) {
           return res.json(result);
          //console.log(result.dataValues);
        });


	});

	//adds favorite
	app.post("/add/favorite", function(req, res){
		var userId = req.body.user_id;
		var petId = req.body.pet_id;
		// console.log(req.body)
		// console.log("userID" + userId);
		// console.log("petID"+petId);

		db.userfav.create({
		    userId: userId,
		    PetId: petId,
		}).then(function() {
		    //send back a response of true when successfully created a pet
		    res.json(true);
		});


	});

	app.get("/users/:userID?", function(req, res){
		var userId = req.params.userID;
		//console.log(userId);
		db.userfav.findAll({
			where: {
				userId : userId
			},
      		include: [db.Pet]
		})
        .then(function(result) {
           return res.json(result);
           console.log(result);
        });


	});

		//deletes favorite pet
	app.delete("/delete/favorite",function(req, res){
		var petId = req.body.id;
		var userId =req.body.user;
		//deletes the specified pet
		db.userfav.destroy({
	      where: {
	        PetId: petId,
	        userId: userId

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

};
