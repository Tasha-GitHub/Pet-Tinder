
		//variabels for searchObj object
	if (JSON.parse(localStorage.getItem("userID"))) {

      var storedUserID = JSON.parse(localStorage.getItem("userID"));

      // Sets the global current user id variable equal to the stored ID
      currentUser_id = storedUserID;
  }



		//ajax call for given search inputs
		$.ajax({
	        type: "GET",
	        url: "/users/"+currentUser_id,
	    }).then(function(res){
	    	console.log("hi")
	    	console.log(res)
	    	//$("#favorites").html(res)
	    })