// Require the bcrypt package
var bcrypt = require('bcrypt');


 

function saltPass(password) {

// Create a password salt
var salt = bcrypt.genSaltSync(10);
 
// Salt and hash password
var passwordToSave = bcrypt.hashSync(password, salt);


};

var orm = {
	bcrypt : function(table,userColname,userColPass, enteredUserName,enteredUserPassword){
			// Grab user from your database - this example uses MysQL
		connection.query("SELECT * FROM" + table + "WHERE" + colname +"=?",
		    [enteredUserName],
		    function(err, rows) {
		        if (err) {
		            return done(err);
		        }
		 
		        if (bcrypt.hashSync(enteredUserPassword, salt) === rows[0].userColPass) {
		          // Yay, it worked!
		        }
		});
	}

}

