var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
.viewport(500, 700)
  .goto('https://polar-spire-88666.herokuapp.com/')
  // .goto('http://localhost:3000/')
   	
  
    .click('html body div#mainColor.container-fluid.content div.row div.col.s12.m3.side-menu section.panel.panel-primary div.panel-body form button#runSearch.btn.center-align.col.s5')

  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

