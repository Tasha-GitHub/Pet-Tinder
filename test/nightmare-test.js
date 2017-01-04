var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
.viewport(500, 600)
  .goto('https://limitless-peak-20865.herokuapp.com')
  // .goto('http://localhost:3000/')
   .click('#logText')
   .click('#loginModalButton')
  .type('input[type="email"]', 's@gmail.com')
    .wait(10)
  .type('input[type="password"]', 'abcd')  
      .wait(10)
  .click('#loginButton')
  .wait('#logText')
  .click("#heart")
  .wait(1000)
  // .goto('https://localhost:3000/')
  .click('#fave')
  // .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

