//global variables
var animalList=[];
var petLoaded=false;
var counter =0;
var currentPet_id;
var currentUser_id;
// Emptied the localStorage
localStorage.clear();

$(document).ready(function() {
   	//runs when a user submits a search
	$("#runSearch").on("click", function(e){
		e.preventDefault();
		//variabels for searchObj object
		var type = $("#type").val().trim();
		var age = $("#age").val().trim();
		var size = $("#size").val().trim();
		var gender = $("#gender").val().trim();
		
		//ajax call for given search inputs
		$.ajax({
	        type: "GET",
	        url: "/search/"+type+"/"+age+"/"+size+"/"+gender,
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
		console.log(animalList.length);
		if(counter === 0){
			alertify.warning("please start your search to view current pets!");
		}else{
			if(counter < animalList.length){
				if(petLoaded){
					petCardCreator();
				}	
			}else{
				endOfList();
			}
		}
	});
	//adds favorite
	$(".favorite").on("click", function(e){
		e.preventDefault();
		console.log(counter);
		console.log(animalList.length);
		if(petLoaded === false){
			alertify.warning("please start your search to view current pets!");
		}else{
			if(counter < animalList.length){
				getUserID();
				favoritePet();
			    //then load new card
				petCardCreator();
					
			}else{
				getUserID();
				favoritePet();
				//load last card
				endOfList();
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
	counter = 0;
}

// retrieves usersID from local storage
function getUserID(){
	if (JSON.parse(localStorage.getItem("userID"))) {

      var storedUserID = JSON.parse(localStorage.getItem("userID"));

      // Sets the global current user id variable equal to the stored ID
      currentUser_id = storedUserID;
  }
}

function favoritePet(){
				console.log("counter"+counter);
				console.log("animals loaded"+animalList.length);
				console.log("pet loaded" +petLoaded);
				console.log("current pet"+currentPet_id);
				console.log("current pet id"+currentPet_id);
						var favorite = {
						pet_id : currentPet_id,
						user_id : currentUser_id
					}
					console.log("hi")
					console.log(favorite);
					//adds pet to favorites
					$.ajax({
			            type: "POST",
			            url: "/add/favorite",
			            data: favorite
			        }).then(function(){
			        	alertify.success("pet added to favorites");
			        });

}



