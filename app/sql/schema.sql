Create database fetch_db;
Use fetch_db;


CREATE TABLE user (
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	user_name VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	photo VARCHAR(500) DEFAULT "None",
	address VARCHAR(100),
	location_coor VARCHAR(50) DEFAULT "Unknown",
	email VARCHAR(50) DEFAULT "example@fetch.com",
	phone VARCHAR(30) DEFAULT "1 xxx-xxx-xxxx",
	bio VARCHAR(1000) DEFAULT "None",
	has_kids BOOLEAN DEFAULT false,
	has_dogs BOOLEAN DEFAULT false,
	has_cats BOOLEAN DEFAULT false,
	has_fence BOOLEAN DEFAULT false,
	has_other VARCHAR(100) DEFAULT "None",
	wanted_type VARCHAR(30) DEFAULT "Unknown",
	wanted_age INT DEFAULT 999,
	wanted_gender VARCHAR(30) DEFAULT "Unknown",
	wanted_breed VARCHAR(50) DEFAULT "Unknown",
	wanted_color VARCHAR(50) DEFAULT "Unknown",
	wanted_hair_length VARCHAR(30) DEFAULT "Unknown",
	wanted_weight INT(4) DEFAULT "100",
	wanted_size VARCHAR(30) DEFAULT "Unknown",
	wanted_indoor_outdoor VARCHAR(30) DEFAULT "Unknown",
	wanted_personality VARCHAR(30) DEFAULT "Unknown",
	wanted_location_name VARCHAR(50) DEFAULT "Unknown",
	wanted_surrender VARCHAR(50) DEFAULT "Unknown",
	wanted_bite_history BOOLEAN DEFAULT false,
	wanted_heartworms BOOLEAN DEFAULT false,
	wanted_fleas BOOLEAN DEFAULT false,
	wanted_vaccines VARCHAR(50) DEFAULT "Unknown",
	wanted_spay_or_neuter BOOLEAN DEFAULT false,
	wanted_sheds VARCHAR(30) DEFAULT "Unknown",
	wanted_medical_other VARCHAR(100) DEFAULT "None",
	wanted_housetrained BOOLEAN DEFAULT false,
	wanted_pottytrained BOOLEAN DEFAULT false,
	wanted_leashtrained BOOLEAN DEFAULT false,
	wanted_good_with_kids BOOLEAN DEFAULT false,
	wanted_good_with_dogs BOOLEAN DEFAULT false,
	wanted_good_with_cats BOOLEAN DEFAULT false,
	wanted_good_with_water BOOLEAN DEFAULT false,
	wanted_good_with_other VARCHAR(100) DEFAULT "None",
	wanted_commands_sit BOOLEAN DEFAULT false,
	wanted_commands_stay BOOLEAN DEFAULT false,
	wanted_commands_rollover BOOLEAN DEFAULT false,
	wanted_commands_shake BOOLEAN DEFAULT false,
	wanted_commands_other VARCHAR(100) DEFAULT "None",
	wanted_safety_color VARCHAR(30) DEFAULT "Blue"
	);


	USE fetch_db;


	CREATE TABLE pets (
	pet_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	type VARCHAR(30) NOT NULL,
	name VARCHAR(30) DEFAULT "Unknown",
	photo VARCHAR(500) DEFAULT "None",
	age INT,
	weight DECIMAL(4,2),
	gender VARCHAR(30) DEFAULT "Unknown",
	breed VARCHAR(50) DEFAULT "Unknown",
	color VARCHAR(50) DEFAULT "Unknown",
	hair_length VARCHAR(30) DEFAULT "Unknown",
	size VARCHAR(30) DEFAULT "Unknown",
	indoor_outdoor VARCHAR(30) DEFAULT "Unknown",
	personality VARCHAR(100) DEFAULT "Unknown",
	bio VARCHAR(1000) DEFAULT "None",
	location_name VARCHAR(50) DEFAULT "Unknown",
	location_coor VARCHAR(50) DEFAULT "Unknown",
	surrender VARCHAR(50) DEFAULT "Unknown",
	bite_history BOOLEAN DEFAULT false,
	heartworms BOOLEAN DEFAULT false,
	fleas BOOLEAN DEFAULT false,
	vaccines VARCHAR(50) DEFAULT "Unknown",
	spay_or_neuter BOOLEAN DEFAULT false,
	sheds VARCHAR(30) DEFAULT "Unknown",
	medical_other VARCHAR(100) DEFAULT "None",
	housetrained BOOLEAN DEFAULT false,
	pottytrained BOOLEAN DEFAULT false,
	leashtrained BOOLEAN DEFAULT false,
	good_with_kids BOOLEAN DEFAULT false,
	good_with_dogs BOOLEAN DEFAULT false,
	good_with_cats BOOLEAN DEFAULT false,
	good_with_water BOOLEAN DEFAULT false,
	good_with_other VARCHAR(100) DEFAULT "None",
	commands_sit BOOLEAN DEFAULT false,
	commands_stay BOOLEAN DEFAULT false,
	commands_rollover BOOLEAN DEFAULT false,
	commands_shake BOOLEAN DEFAULT false,
	commands_other VARCHAR(100) DEFAULT "None",
	safety_color VARCHAR(30) DEFAULT "Blue"
	);


	use fetch_db;


	CREATE TABLE userfavs (
	user_id VARCHAR(50) NOT NULL,
	pet_id INT NOT NULL
	);


	-- query to get favroite
	select users.name , pets.name
	FROM user JOIN pets JOIN userfavs
	ON userfavs.user_id = userfavs.user_id
	and favs.pet_id = pets.pet_id; 

	--check the query
	--should fetch all the fav pets by usr 1
	select * from userfavs where user_id = 1;
