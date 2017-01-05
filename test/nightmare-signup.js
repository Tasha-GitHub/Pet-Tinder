var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
    .viewport(1080, 1200)
    .goto('https://limitless-peak-20865.herokuapp.com')
    // .goto('http://localhost:3000/')
    .click('#slide-outm')
    .click('#signUpModalButton')
    
    .type('input[id="emailSignUpInput"]', 'bob@gmail.com')
    .wait(20)
    .type('input[id="passwordSignUpInput1"]', 'abcd')
    .wait(20)
    .type('input[id="passwordSignUpInput2"]', 'abcd')
    .wait(20)
    .click('#signUpButton')
    .wait(30)
    // .goto('http://localhost:3000/')
    .wait(50)
    // .goto('https://infinite-hamlet-92979.herokuapp.com')
    // .goto('https://limitless-peak-20865.herokuapp.com/favorites')
    .evaluate(function() {
        return document.querySelector('#signUpButton').href
    })
    // .end()
    .then(function(result) {
        console.log(result)
    })
    .catch(function(error) {
        console.error('Sign up failed:', error);
    });
