//global variables
var animalList=[];
var petLoaded=false;
var counter =0;
var currentPet_id;
var currentUser_id;
// Emptied the localStorage
//localStorage.clear();

$(document).ready(function() {
	
   	//runs when a user submits a search
	$("#runSearch").on("click", function(e){
		e.preventDefault();
		counter = 0;
		//variabels for searchObj object
		var type = $("#type").val().trim();
		console.log(type);
		var age = $("#age").val().trim();
		//console.log(age);
		var size = $("#size").val().trim();
		//console.log(size);
		var gender = $("#gender").val().trim();
		//console.log(gender);
		
		
		// Here we get the location of the root page.
    	var currentURL = window.location.origin;
    	//ajax call for given search inputs
		$.ajax({
	        type: "GET",
	        url: currentURL+"/search/"+type+"/"+age+"/"+size+"/"+gender,
	    }).then(function(res){
	    	animalList=[];
	    	for(var i =0 ; i< res.length ; i++){
	    		animalList.push(res[i]);
	    	}
	  		//checks to see if there are any pets that matched the users search
	    	if(animalList.length === 0){
				endOfList();
			}else{
				petCardCreator();
			}
			//reset counter
	    	counter = 1;
	    	petLoaded = true;
	    });
	});

	//clears users inputs
	$("#clearAll").on("click", function(e){
		e.preventDefault();
		var select = $('select');
	    select.prop('selectedIndex', 0); //Sets the first option as selected
	    select.material_select();        //Update material select
	});
	//next arrow functionality
	$(".arrow").on("click", function(e){
		e.preventDefault();
		if(petLoaded === false){
			alertify.warning("please start your search to view current pets!");
		}else{
			if(counter < animalList.length){
				getUserID();
			    //then load new card
				petCardCreator();
					
			} else if(counter === animalList.length){
				getUserID();
				//load last card
				endOfList();
				
			}else{
				alertify.warning("Sorry there are no more pets. Please search again.");
			}
		}

	});
	//adds favorite
	$(".favorite").on("click", function(e){
		e.preventDefault();
		if(petLoaded === false){
			alertify.warning("please start your search to view current pets!");
		}else{
			if(counter < animalList.length){
				if (JSON.parse(localStorage.getItem("userID"))) {
					getUserID();
					favoritePet();
			    	//then load new card
			    	petCardCreator();

				} else {
					alertify.warning("please log in to favorite a pet!");
				}
				
					
			} else if(counter === animalList.length){
				if (JSON.parse(localStorage.getItem("userID"))) {
					getUserID();
					favoritePet();
					//load last card
					endOfList();
				} else {
					alertify.warning("please log in to favorite a pet!");
				}
				
			}else{
				alertify.warning("Sorry there are no more pets. Please search again.");
			}
		}

	});
});

//function that fills the main content of the site
function petCardCreator(){
	var petName = animalList[counter].pet_name;
	var petBreed = animalList[counter].pet_breed;
	var petAge = animalList[counter].pet_age;
	var petPhoto = animalList[counter].pet_photo;
	var petGender = animalList[counter].pet_gender;
	var petSize = animalList[counter].pet_size;
	currentPet_id = animalList[counter].id;
	var petDesription = animalList[counter].pet_description;
	    	
	$(".card-title").html(petName);
	$("#petPhoto").attr("src", petPhoto);
	var cardDescription = $("<div>");
	cardDescription.html(petDesription);
	cardDescription.append("<ul></ul>");
	cardDescription.find("ul").append("<li> &#9829 Breed: "+ petBreed + "</li>");
	cardDescription.find("ul").append("<li> &#9829 Age: "+ petAge + "</li>");
	cardDescription.find("ul").append("<li> &#9829 Gender: "+ petGender + "</li>");
	cardDescription.find("ul").append("<li> &#9829 Size: "+ petSize + "</li>");
	$(".card-content").html(cardDescription);
	counter++;
}

//runs only when the full list of queried pets is done
function endOfList(){
	var petName = "No More Pets!";
	var petPhoto = "assets/images/sad.png";
	var petDesription = "Uh oh you have searched all available pets! Please refine your search and try again.";
	    	
	$(".card-title").html(petName);
	$("#petPhoto").attr("src", petPhoto);
	var cardDescription = $("<div>");
	cardDescription.html(petDesription);
	$(".card-content").html(cardDescription);
	counter++;
}

// retrieves usersID from local storage
function getUserID(){
      var storedUserID = JSON.parse(localStorage.getItem("userID"));
      // Sets the global current user id variable equal to the stored ID
      currentUser_id = storedUserID;
}

function favoritePet(){
	var favorite = {
		pet_id : currentPet_id,
		user_id : currentUser_id
	}
	// Here we get the location of the root page.
    var currentURL = window.location.origin;
	//adds pet to favorites
	$.ajax({
		type: "POST",
		url: currentURL + "/add/favorite",
		data: favorite
	}).then(function(){
		alertify.success("pet added to favorites");
	});

}



