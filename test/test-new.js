//Not in use yet

// var chai = require('chai');
// var expect = chai.expect();
// var should = chai.should();
var login = require("../app/public/javascript/login.js");
	
// global.$ = require('jquery')(window);
// // .inject('js', 'jquery.js')
// describe("check username", function() {
//     // beforeEach(function() {
//     //     email = "s@gmail.com";
//     //     password = "abcd"
//     // });

//     it('should not be a number', function() {
//         login.email('s@gmail.com').should.equal("s@gmail.com");
//     });
// });

// will turn your Node.js environment into a mock browser environment supporting the full DOM and browser API. 
var jsdom = require('mocha-jsdom')
var expect = require('chai').expect
var $ = require('jquery')
describe('mocha tests', function () {
 
  jsdom()
 
  it('has document', function () {
    var div = document.createElement('div')
    expect(div.nodeName).eql('DIV')
  });
 
});

describe('mocha tests', function () {
 
  var $

 before(function () {
  $ = rerequire('jquery')
})
 
  // it('works', function () {
  //   document.body.innerHTML = '<div>hola</div>'
  //   expect($("div").html()).eql('hola')
  // })
  it('should not be a number', function() {
        login.email('s@gmail.com').should.equal("s@gmail.com");
    });
 
})

