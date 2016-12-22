// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var Sequelize = require("sequelize");
// Routes
// =============================================================
module.exports = function(app) {
    // app.get('/api/pets', function(req, res) {
    //     db.Pet.findAll({}).then(function(dbPet) {
    //         res.json(dbPet);
    //     });
    // });
    // GET route for getting all of the pets
    app.get("/api/pets", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Pet.findAll({}).then(function(dbPet) {
            // We have access to the pets as an argument inside of the callback function
            res.json(dbPet);
        });
    });

    // POST route for saving a new todo
    app.post("/api/pets", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Pet.create({
            pet_name: "Cookie",
            pet_age: 4
        }).then(function(dbPet) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbPet);
        });
    });


//not working yet
    app.get("/api/userfavs", function(req, res) {
        db.userfavs.findAll({
            include: [{
                attributes: ['userId', 'petId'],
                through: {
                    where: {
                        userId: 1
                    }
                }
            }]
        });
    });

    // app.get("/api/userfavs", function(req, res) {
    //     Sequelize.query('SET FOREIGN_KEY_CHECKS = 0; INSERT INTO userfavs(userId, petId) values(1, 3)')
    //         .then(function(dbUserfav) {
    //             console.log(dbUserfav);
    //             return db.sync({
    //                 force: true
    //             });
    //         })
    //         .then(function() {
    //             return db.query('SET FOREIGN_KEY_CHECKS = 1')
    //         })
    //         .then(function() {
    //             console.log('Database synchronised.');
    //         }, function(err) {
    //             console.log(err);
    //         });
    // });
};
