var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
    .viewport(1080, 1200)
    .goto('https://polar-spire-88666.herokuapp.com/')
    .click('#signUpModalButton')
    .type('input[id="nameSignUpInput"]', 'Shweta Rane')
    .wait(20)
    .type('input[id="phoneSignUpInput"]', '5125125122')
    .wait(20)
    .type('input[id="emailSignUpInput"]', 's@gmail.com')
    .wait(20)
    .type('input[id="passwordSignUpInput1"]', 'abcd')
    .wait(20)
    .type('input[id="passwordSignUpInput2"]', 'abcd')
    .wait(20)
    .click('#signUpButton')
    .wait(20)

 
 .evaluate(function () {
    return document.querySelector('#signUpButton').href
  })
.end()
    .then(function(result) {
        console.log(result)
    })
    .catch(function(error) {
        console.error('Sign up failed:', error);
    });
