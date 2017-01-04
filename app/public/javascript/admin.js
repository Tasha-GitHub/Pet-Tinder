$(document).ready(function () {

	if (JSON.parse(localStorage.getItem("admin")) === false) {
		$(".mainContent").html("<div class=\"warningMessage\"><h3>"+"Sorry but you are not an admin and do not have permission to view this information"+"</h3></div>")
	}	
	// populate table of pets in database
	allPetsQuery();

	$("#addPetBtn").on("click", function (e) {
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
			description: description,
			location: location
		};

		// prepare currentURL string
		var currentURL = window.location.origin;

		//ajax call to create a pet
		$.ajax({
			type: "POST",
			url: currentURL + "/create_pet",
			data: newPet
		}).then(function () {
			$("select").find("option").prop("selected", false);
			$("input[type=text], textarea").val("");
			alert("pet added to database");
			allPetsQuery();
		});
	});

	// populate table of pets in database
	function allPetsQuery() {

		// Here we get the location of the root page.
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it
		$.ajax({
			url: currentURL + "/all",
			method: "GET"
		})

		.done(function (allPets) {
			// clear table beforehand
			$("#petTable").empty();
			// add pets from database
			for (var i = 0; i < allPets.length; i++) {
				var pet = $("<tr>");
				var petId = $("<td>" + allPets[i].id + "</td>");
				pet.append(petId);
				var petName = $("<td>" + allPets[i].pet_name + "</td>");
				pet.append(petName);
				var petPic = $("<td><img class=\"responsive-img circle smallPic\" src='" + allPets[i].pet_photo + "' alt='" + allPets[i].pet_name + "'></td>");
				pet.append(petPic);
				var petAdopted = $("<td></td>");
				var buttonId = $("<a class=\"waves-effect waves-light btn\" data=\"" + allPets[i].id + "\"><i class=\"material-icons\">done</i></a>").data("data-idNum", allPets[i].id).addClass("deletePet");
				petAdopted.append(buttonId);
				pet.append(petAdopted);
				$("#petTable").append(pet);
			}

		});
	}

	$("#deletePetBtn").on("click", function (e) {
		e.preventDefault();
		var name = $("#deletePetName").val().trim();
		console.log(name);

		var currentURL = window.location.origin;
		$.ajax({
			type: "GET",
			url: currentURL + "/pets/" + name,
		}).done(function (allPets) {


			alertify.success("Found " + name + "(s)!");
			// clear table beforehand
			$("#petTable").empty();
			// add pets from database
			for (var i = 0; i < allPets.length; i++) {
				var pet = $("<tr>");
				var petId = $("<td>" + allPets[i].id + "</td>");
				pet.append(petId);
				var petName = $("<td>" + allPets[i].pet_name + "</td>");
				pet.append(petName);
				var petPic = $("<td><img class=\"responsive-img circle smallPic\" src='" + allPets[i].pet_photo + "' alt='" + allPets[i].pet_name + "'></td>");
				pet.append(petPic);
				var petAdopted = $("<td></td>");
				var buttonId = $("<a class=\"waves-effect waves-light btn\" data=\"" + allPets[i].id + "\"><i class=\"material-icons\">done</i></a>").data("data-idNum", allPets[i].id).addClass("deletePet");
				petAdopted.append(buttonId);
				pet.append(petAdopted);
				$("#petTable").append(pet);
			}
			console.log("end");

		});
	});

	// remove pets from database
	$("#petTable").on("click", ".deletePet", function (e) {
		e.preventDefault();
		var petId = $(this).data();
		var deletePet = {
			id: petId.dataIdNum
		};

		// prepare currentURL string
		var currentURL = window.location.origin;

		$.ajax({
			type: "delete",
			url: currentURL + "/delete_pet",
			data: deletePet
		}).then(function (data) {
			if (data) {
				alertify.success("pet deleted");
			} else {
				alertify.error("Pet Id not found");
			}
			allPetsQuery();
		});
	});

});