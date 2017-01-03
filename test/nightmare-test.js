var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  // .goto('https://polar-spire-88666.herokuapp.com/')
  .goto('http://localhost:3000/')
  .click('#log')
  .wait(10)
  .click('.caret')
  .wait(10)
  .click('#heart')
  .wait(20)
  .click('#fav-page')
  
   .back()
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

