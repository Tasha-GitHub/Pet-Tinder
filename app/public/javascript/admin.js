$(document).ready(function(){
	// populate table of pets in database
	allPetsQuery();
	
	$("#addPetBtn").on("click", function(e){
		e.preventDefault();
		var type = $("#type").val();
		var name = $("#name").val().trim();
		var photo = $("#photo").val().trim();
		var age = $("#age").val();
		var gender = $("#gender").val();
		var breed = $("#breed").val().trim();
		var color = $("#color").val().trim();
		var size = $("#size").val();
		var description = $("#description").val().trim();
		var location = $("#location").val().trim();

		var newPet = {
			type: type,
			name: name,
			photo: photo,
			age: age,
			gender: gender,
			breed: breed,
			color: color,
			size: size,
			description : description,
			location: location
		};
		//ajax call to create a pet
		$.ajax({
	            type: "POST",
	            url: "/create_pet",
	            data: newPet
	        }).then(function(){
	        	$("select").find("option").prop("selected", false);
	        	$("input[type=text], textarea").val("");
	        	alert("pet added to database");
	        });
	});

	// populate table of pets in database
	  function allPetsQuery() {

      // Here we get the location of the root page.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it
      $.ajax({ url: currentURL + "/all", method: "GET" })
      .done(function(allPets) {

      	for (var i = 0; i < allPets.length; i++) {
      		var pet = $("<tr>");
      		var petId = $("<td>" + allPets[i].id + "</td>");
      		pet.append(petId);
      		var petName = $("<td>" + allPets[i].pet_name + "</td>");
      		pet.append(petName);
      		var petPic = $("<td><img class=\"responsive-img circle\" src='"+allPets[i].pet_photo+"'' alt='"+allPets[i].pet_name+"'></td>");
      		pet.append(petPic);
      		pet.append("<td><a class=\"waves-effect waves-light btn\"><i class=\"material-icons\">done</i></a></td>");
      		$("#petTable").append(pet);
      	}

      });
  }

	// remove pets from database
	$("#deletePetBtn").on("click", function(e){
		e.preventDefault();
		var petId = $("#p_id").val().trim();
		var deletePet = {
			id : petId
		};
		$.ajax({
	            type: "delete",
	            url: "/delete_pet",
	            data: deletePet
	        }).then(function(data){
	        	if(data){
	        		alert("pet deleted");
	        	} else {
	        		alert("Pet Id not found");
	        	}
	        });
	});

});

