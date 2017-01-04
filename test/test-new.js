//Not in use yet

var chai = require('chai');
var expect = chai.expect();
var should = chai.should();
var login = require("../app/public/javascript/login.js");
	
global.$ = require('jquery')(window);
describe("check username", function() {
    // beforeEach(function() {
    //     email = "s@gmail.com";
    //     password = "abcd"
    // });

    it('should not be a number', function() {
        login.email('s@gmail.com').should.equal("s@gmail.com");
    });
});
