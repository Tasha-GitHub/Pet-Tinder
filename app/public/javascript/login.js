 function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;

        var info = {
            id: profile.getId(),
            fullname: profile.getName(),
            firstname: profile.getGivenName(),
            lastname: profile.getFamilyName(),
            photo: profile.getImageUrl(),
            email: profile.getEmail()
        }

        $.ajax({
            type: "POST",
            url: "/login",
            data: info
        });
      };

    // for modal popup
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    // locators

    // input fields
    var emailLoginInput = $("#emailLogin");
    var passwordLoginInput = $("#passwordLogin");
    var nameSignUpInput = $("#nameSignUpInput");
    var phoneSignUpInput = $("#phoneSignUpInput");
    var emailSignUpInput = $("#emailSignUpInput");
    var passwordSignUpInput1 = $("#passwordSignUpInput1");
    var passwordSignUpInput2 = $("#passwordSignUpInput2");

    // buttons

    var loginButton = $("#loginButton");
    var signUpButton = $("#signUpButton");

    // clicklisteners

    loginButton.on("click", loginClick);
    signUpButton.on("click", signUpClick);

    // clicklistener functions
    function loginClick(e){
        e.preventDefault();

        var email = emailLoginInput.val().trim();
        var password = passwordLoginInput.val().trim();

        var loginObject = {
            email: email,
            password: password
        };
        console.log("login")
        console.log(loginObject);

        emailLoginInput.val("");
        passwordLoginInput.val("");
        var currentURL = window.location.origin;
        $.ajax({
            type: "POST",
            url: currentURL + "/login",
            data: loginObject
        })
        .done(function(data){
            if(data){
                console.log("your logged in!");
                location.reload();
            } else{
                console.log("invalid password or email");
            }
        });

    }

        function signUpClick(e){
            var password1 = passwordSignUpInput1.val().trim();
            var password2 = passwordSignUpInput2.val().trim();

            if (password1 === password2 && password1.length > 3) {
                e.preventDefault();
                var password = password1;   
                var name = nameSignUpInput.val().trim();
                var email = emailSignUpInput.val().trim();
                var phone = phoneSignUpInput.val().trim();
                var password1 = passwordSignUpInput1.val().trim();
                var password2 = passwordSignUpInput2.val().trim();

                var signUpObject = {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password
                };
                var currentURL = window.location.origin;
                console.log(signUpObject);
                //ajax post to data base to save users email and pass
                $.ajax({
                    type: "POST",
                    url: currentURL + "/create",
                    data: signUpObject
                })
                .done(function(data){
                    if(data){
                        console.log("success you created an account!");
                        location.reload();
                    }
                });

                nameSignUpInput.val("");
                emailSignUpInput.val("");
                phoneSignUpInput.val("");
                passwordSignUpInput1.val("");
                passwordSignUpInput2.val("");
            } else if (password1 <= 3) {
                alert("Your password must be four characters or longer.");
            } else {
                alert("Your passwords do not match.");
                }
        }

  });

// javascript for overlay

/* Open when someone clicks on the span element */
        function openNav() {
            document.getElementById("myNav").style.height = "100%";
        }

        /* Close when someone clicks on the "x" symbol inside the overlay */
        function closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }