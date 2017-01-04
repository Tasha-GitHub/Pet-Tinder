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
	        	allPetsQuery();
	        });
	});

	$("#deletePetBtn").on("click", function(e){
		e.preventDefault();
		var name = $("#deletePetName").val().trim();
		console.log(name);
		findPetName();
	});

	// populate table of pets in database
	  function allPetsQuery() {

      // Here we get the location of the root page.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it
      $.ajax({ url: "http://localhost:3000/all", method: "GET" })
      .done(function(allPets) {
      	// clear table beforehand
      	$("#petTable").empty();
      	// add pets from database
      	for (var i = 0; i < allPets.length; i++) {
      		var pet = $("<tr>");
      		var petId = $("<td>" + allPets[i].id + "</td>");
      		pet.append(petId);
      		var petName = $("<td>" + allPets[i].pet_name + "</td>");
      		pet.append(petName);
      		var petPic = $("<td><img class=\"responsive-img circle smallPic\" src='"+allPets[i].pet_photo+"'' alt='"+allPets[i].pet_name+"'></td>");
      		pet.append(petPic);
      		var petAdopted = $("<td></td>");
      		var buttonId = $("<a class=\"waves-effect waves-light btn\" data=\"" + allPets[i].id + "\"><i class=\"material-icons\">done</i></a>").data("data-idNum", allPets[i].id).addClass("deletePet");
      		petAdopted.append(buttonId);
      		pet.append(petAdopted);
      		$("#petTable").append(pet);
      	}

      });
  }

  // find a specific pet by name
  function findPetName() {
  	// Here we get the location of the root page.
      var currentURL = window.location.origin;

      // The AJAX function uses the URL of our API to GET the data associated with it
      $.ajax({ url: currentURL + "/pets/:name?", method: "GET" })
      .done(function(petName) {
      	// clear table beforehand
      	$("#petTable").empty();
      	// add pets from database
      	for (var i = 0; i < petName.length; i++) {
      		var pet = $("<tr>");
      		var petId = $("<td>" + petName[i].id + "</td>");
      		pet.append(petId);
      		var petName = $("<td>" + petName[i].pet_name + "</td>");
      		pet.append(petName);
      		var petPic = $("<td><img class=\"responsive-img circle smallPic\" src='"+petName[i].pet_photo+"'' alt='"+petName[i].pet_name+"'></td>");
      		pet.append(petPic);
      		var petAdopted = $("<td></td>");
      		var buttonId = $("<a class=\"waves-effect waves-light btn\" data=\"" + petName[i].id + "\"><i class=\"material-icons\">done</i></a>").data("data-idNum", petName[i].id).addClass("deletePet");
      		petAdopted.append(buttonId);
      		pet.append(petAdopted);
      		$("#petTable").append(pet);
      	}

      });

      }

	// remove pets from database
	$("#petTable").on("click", ".deletePet", function(e){
		e.preventDefault();
		var petId = $(this).data();
		var deletePet = {
			id : petId.dataIdNum
		};
		$.ajax({
	            type: "delete",
	            url: "/delete_pet",
	            data: deletePet
	        }).then(function(data){
	        	if(data){
	        		alertify.success("pet deleted");
	        	} else {
	        		alertify.error("Pet Id not found");
	        	}
	        	allPetsQuery();
	        });
	});

});

