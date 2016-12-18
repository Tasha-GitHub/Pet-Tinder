$(document).ready(function(){
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
		var personality = $("#personality").val().trim();
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
			personality : personality,
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
	        });
	});

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

