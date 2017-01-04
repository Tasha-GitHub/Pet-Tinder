var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
.viewport(1080, 1200)
  .goto('https://polar-spire-88666.herokuapp.com/')
  // .goto('http://localhost:3000/')
   .click('#logText')
   .click('#loginModalButton')
  .type('input[type="email"]', 's@gmail.com')
    .wait(10)
  .type('input[type="password"]', 'abcd')  
      .wait(10)
  .click('#loginButton')
  .wait(40)
  .click('.closebtn')
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

