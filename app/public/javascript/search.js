    function favoritesQuery() {

      // Here we get the location of the root page.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it
      $.ajax({ url: currentURL + "/api/favorites", method: "GET" })
      .done(function(favorites) {

        // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/api/favorites");
        console.log("------------------------------------");

        // Here we then log the NYTData to console, where it will show up as an object.
        console.log(favorites);
        console.log("------------------------------------");
        
        // show message if no pets are saved
        if (favorites.length === 0) {
          $("#favorites").append("<h2>You don't have any saved pets!</h2>");
        
        } else {
        // else show their saved pets
          for (var i = 0; i < favorites.length; i++) {

          // Create the materialize card and 
          var savedPet = $("<div>");
          savedPet.addClass("card col s12 m4");
          savedPet.attr("id", favorites[i].id);
          
          // add the pet image to the saved pet card
          var savedImage = $("<div>");
          savedImage.addClass("card-image waves waves-effect waves-block waves-light");
          savedImage.append("<img class='activator' src='" + favorites[i].image + "'>");
          savedPet.append(savedImage);
          // add an adopt option and a link to look at the pets bio again
          var savedAdopt = $("<div>");
          savedAdopt.addClass("card-content");
          savedAdopt.append("<span class='card-title activator grey-text text-darken-4'>" + favorites[i].name + "<i class='material-icons right'>more_vert</i></span>");
          savedAdopt.append("<p><a href='#'>Adopt this Pet!</a></p>");
          savedPet.append(savedAdopt);
          // have the bio slide up whe link clicked
          var savedBio = $("<div>");
          savedBio.addClass("card-reveal");
          savedBio.append("<span class='card-title grey-text text-darken-4'>" + favorites[i].name + "<i class='material-icons right'>close</i></span>");
          savedBio.append("<p>" + favorites[i].bio + "</p>");
          savedPet.append(savedBio);
          // send it to the favorites section
          $("#favorites").append(savedPet);
        }
        // Loop through and display each of the pets
        
        }
      });
    }