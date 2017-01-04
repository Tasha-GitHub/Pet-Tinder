var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
.viewport(1080, 1200)
  // .goto('https://limitless-peak-20865.herokuapp.com')
  .goto('http://localhost:3000/')
  // .select('#select-options-1a6985fc-31de-08cb-e244-f134b3226594', value= 'cat') 
  // .select('#animalType' , value = "cat")
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

