-- Rough queries for pets--

INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality, location_name)
values
("dog", "Luna", "no photo", 1, "male", "labrador","white", "medium", "happy", "austin");


INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality, location_name)
values
("dog", "Buddy", "https://s-media-cache-ak0.pinimg.com/originals/72/dc/02/72dc02c28a0657c47aae5326cc10cf44.jpg", 1, "male", "doberman","red", "medium", "protective", "austin");


INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality, location_name)
values
("dog", "Bella", "https://s-media-cache-ak0.pinimg.com/736x/00/2f/51/002f51849027acbcc2dd9d4d7b5d936d.jpg", 1, "female", "great-dane","black", "large", "docile", "austin");


INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality, location_name)
values
("dog", "Lucy", "https://s-media-cache-ak0.pinimg.com/originals/3f/53/08/3f53088207fd393d631f566ec6f25ed3.jpg", 1, "female", "shih-tzu","black", "small", "grumpy", "dallas");


INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality, location_name)
values
("dog", "Bailey", "http://static.boredpanda.com/blog/wp-content/uploads/2016/07/cute-bulldog-smiling-sleeping-dog-narcoleptic-frenchiebutt-millo-2.jpg", 1, "male", "bulldog","white", "small", "happy", "austin");


INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality, location_name)
values
("dog", "Saki", "https://www.facebook.com/photo.php?fbid=648242255261939&set=a.100531173366386.762.100002285101990&type=3&theater", 14, "female", "chihuahua","brown", "small", "happy", "austin");


INSERT INTO pets(type, name, photo, age, gender, breed, color, size, personality,location_name)
values
("dog", "Charlotte", "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/10374476_10152748539550560_5574394979920206627_n.jpg?oh=b9db73d9363ee3b4a45b08472455d1bf&oe=58B9A24C", 4, "female", "great-dane","black", "large", "docile", "austin");

-- Queries for users
INSERT INTO user(name, user_name, password, address) values
("Randall", "randal@gmail.com", "josh", "austin");

INSERT INTO user(name, user_name, password, address) values
("Jesse", "jesse@gmail.com", "suki", "austin");

INSERT INTO user(name, user_name, password, address) values
("Tasha", "tasha@gmail.com", "tasha", "austin");

INSERT INTO user(name, user_name, password, address) values
("Shweta", "shweta@gmail.com", "rane", "austin");



-- Favs table dummy data--
INSERT INTO userfavs(user_id , pet_id) values (1,1);
INSERT INTO userfavs(user_id , pet_id) values (1,2);
INSERT INTO userfavs(user_id , pet_id) values (4,3);
INSERT INTO userfavs(user_id , pet_id) values (2,4);
INSERT INTO userfavs(user_id , pet_id) values (2,1);
INSERT INTO userfavs(user_id , pet_id) values (3,2);
INSERT INTO userfavs(user_id , pet_id) values (3,2);
INSERT INTO userfavs(user_id , pet_id) values (4,6);