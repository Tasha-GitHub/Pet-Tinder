// var request= require("request");
// var should= require("should");
// var expect= require("expect");
// var util = require("util");
// var baseUrl = "http://localhost:3000";
// var pets = require("../app/models");

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

// describe('Pets', function() {
//   before(function(done) {
//     Pet.sync({ force : true }) // drops table and re-creates it
//       .success(function() {
//         done(null);
//       })
//       .error(function(error) {
//         done(error);
//       });
//   });
//   });

// describe('newPet', function(){
//     it("should create a new pet" , function(){
//         expect(1, "Luna", 2, "Lab", "white", "dog","male", "small", "photo", "des").to.equal(1, "Luna", 2, "Lab", "white", "dog","male", "small", "photo", "des");
//     });
// });

//   describe("Color Code Converter API", function() {

//     describe("RGB to Hex conversion", function() {

//       var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

//       it("returns status 200", function() {
//         request(url, function(error, response, body) {
//           expect(response.statusCode).to.equal(200);
//         });
//       });

//       it("returns the color in hex", function() {
//         request(url, function(error, response, body) {
//           expect(body).to.equal("ffffff");
//         });
//       });

//     });

//     describe("Hex to RGB conversion", function() {
//       var url = "http://localhost:3000/hexToRgb?hex=00ff00";

//       it("returns status 200", function() {
//         request(url, function(error, response, body) {
//           expect(response.statusCode).to.equal(200);
//         });
//       });

//       it("returns the color in RGB", function() {
//         request(url, function(error, response, body) {
//           expect(body).to.equal("[0,255,0]");
//         });
//       });
//     });

//   });
