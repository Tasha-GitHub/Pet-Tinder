// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

module.exports = function(app) {
    // DELETE route for deleting pets. We can get the id of the pets to be deleted
    app.delete("/api/pets/:id", function(req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.Pet.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbPet) {
            res.json(dbPet);
        });

    });


    // // PUT route for updating pets. We can get the updated todo data from req.body
    app.put("/api/pets", function(req, res) {
        //   // Update takes in an object describing the properties we want to update, and
        //   // we use where to describe which objects we want to update
        db.Pet.update({
            pet_name: "Smokie",
            pet_breed: "Pug"
        }, {
            where: {
                id: 3
            }
        }).then(function(dbPet) {
            res.json(dbPet);
        });
    });
};
