function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;

    // data from the oAuth signin
    var info = {
        id: profile.getId(),
        fullname: profile.getName(),
        firstname: profile.getGivenName(),
        lastname: profile.getFamilyName(),
        photo: profile.getImageUrl(),
        email: profile.getEmail(),
        password: profile.getId()
    }

    // perform Ajax call to the login path on google signin
    $.ajax({
            url: '/login',
            type: 'POST',
            data: info

        })
        .done(function (googleSuccess) {
            //console.log("Google SignIn success", googleSuccess);

            var name = googleSuccess.name;

            // update DOM with current user login status and change this DOM element to perform a signout function
            var logText = $("#logText");
            logText.attr("onclick", "signOut()");
            logText.text("Logged in as: " + name);

            // close the overlay
            closeNav();

            // Emptied the localStorage
            localStorage.clear();
            // Store all content into localStorage
            localStorage.setItem("userID", googleSuccess.result);
            localStorage.setItem("userName", googleSuccess.name);
        })
        .fail(function (failedObject) {
            console.log("Google SignIn error", failedObject);
        });
};

// for modal popup
$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    // locators for jQuery ease

    // input fields
    var emailLoginInput = $("#emailLogin");
    var passwordLoginInput = $("#passwordLogin");
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

    // function to perform when the login button is clicked
    function loginClick(e) {
        e.preventDefault();

        var email = emailLoginInput.val().trim();
        var password = passwordLoginInput.val().trim();

        if (email.length === 0 || password.length === 0) {
            alertify.error("Missing Required Fields");
        } else {
            var loginObject = {
                email: email,
                password: password
            };

            emailLoginInput.val("");
            passwordLoginInput.val("");
            var currentURL = window.location.origin;
            $.ajax({
                    type: "POST",
                    url: currentURL + "/login",
                    data: loginObject
                })
                .done(function (data) {
                    if (data.confirm) {

                        var name = data.name;

                        // update DOM with current user login status and change this DOM element to perform a signout function
                        var logText = $("#logText");
                        logText.attr("onclick", "signOut()");
                        logText.text("Logged in as: " + name);

                        // close the overlay
                        closeNav();

                        // close any open modals
                        $(".modal").modal("close");

                        // Emptied the localStorage
                        localStorage.clear();
                        // Store all content into localStorage
                        localStorage.setItem("userID", data.result);
                        localStorage.setItem("userName", data.name);

                    } else {
                        alertify.error("Invalid Password or Email");
                    }
                });
        }
    }

    // function to perform with the sign up button is clicked
    function signUpClick(e) {
        var password1 = passwordSignUpInput1.val().trim();
        var password2 = passwordSignUpInput2.val().trim();

        var email = emailSignUpInput.val().trim();

        // validate the given email address to see if it is a valid email
        if (validateEmail(email)) {

            if (password1 === password2 && password1.length > 3) {
                e.preventDefault();
                var password = password1;
                var email = emailSignUpInput.val().trim();
                var password1 = passwordSignUpInput1.val().trim();
                var password2 = passwordSignUpInput2.val().trim();

                var signUpObject = {
                    email: email,
                    password: password
                };
                var currentURL = window.location.origin;
                //console.log(signUpObject);

                //ajax post to database to save users email and pass
                $.ajax({
                        type: "POST",
                        url: currentURL + "/create",
                        data: signUpObject
                    })
                    .done(function (data) {
                        if (data) {
                            // Emptied the localStorage
                            localStorage.clear();
                            // Store all content into localStorage
                            localStorage.setItem("userID", data.result);
                            //reload page
                            location.reload();
                        }
                    });

                emailSignUpInput.val("");
                passwordSignUpInput1.val("");
                passwordSignUpInput2.val("");
            } else if (password1.length <= 3) {
                alertify.error("Your password must be four characters or longer.");
            } else {
                alertify.error("Your passwords do not match.");
            }
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

// this function will signout the current user
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alertify.success('Signed out.');
        var logText = $("#logText");
        logText.attr("onclick", "openNav()");
        logText.text("Login or Sign Up");
    });

    // Emptied the localStorage
    localStorage.clear();
}

// this function will validate an email. taken from http://www.w3resource.com/javascript/form/email-validation.php
function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true);
    } else {
        alertify.error("You have entered an invalid email address!");
        return (false);
    }
}