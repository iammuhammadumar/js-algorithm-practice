/*
Adding Comments: Choose two of the
programs you’ve written, and add at
least one comment to each. If you
don’t have anything specific to
write because your programs are
too simple at this point, just add
your name and the current date
at the top of each program file.
Then write one sentence describing
what the program does.
*/
console.log('Prob 10');
console.log('Prob 11');
console.log('Prob 12');
console.log('Prob 13');
console.log('Prob 14');
console.log('Prob 15');


let number = 8;

console.log('My fav number is ', number);

let namesList = ['Umar', 'Adil', 'Ali'];

namesList.forEach(name => {
	console.log('One of my friends name is ', name);
});

let viehclsList = ['Bike', 'Car', 'Plane'];

viehclsList.forEach(name => {
	if (name == 'Bike') {
		console.log('I like bike for outing ', name);
	}
	else if (name == 'Car') {
		console.log('Family trip is best in car', name);
	}
	else if (name == 'Plane') {
		console.log('One of my fav viehcls is', name);
	}
	else {
		console.log('I do not like anything');
	}
});



let GuestList = ['Hassan', 'Adil', 'Zai', 'Umar'];

GuestList.forEach(name => {
	console.log('Lets  have some fun in dinner party today', name);
});

GuestList.forEach(name => {
	if (name === 'Umar') {
		return console.log(name, 'is not comming in dinner party today');
	}
	console.log('You are invited for dinner', name);
});


/*
• Start with your program from Exercise 15. Add a print statement to
the end of your program informing people that you found a bigger dinner table.
*/
console.log('Prob 16');

let newGuestList = ['Hassan', 'Adil', 'Zai', 'Umar'];

// start
newGuestList.unshift('Burhan');
//center
newGuestList.splice(newGuestList.length / 2, 0, 'Bilal');
//end
newGuestList.push('Nagori');

newGuestList.forEach(name => {
	console.log('newGuestList is', name);
});

/*
Shrinking Guest List: You just found out that your new dinner table
won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until
 only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you
 have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
console.log('Prob 17');

let finalGuestList = newGuestList.filter((item, index) => index === 0 || index === 1)

console.log('finalGuestList is', finalGuestList.length);

finalGuestList.map(name => {
	console.log('you are still invited', name);
	finalGuestList.shift(name);
});

finalGuestList.splice(0, 2);

console.log('Empty list: ', finalGuestList.length);


/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array
 to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order.
 Print the list to show that its order has changed.
*/
console.log('Prob 18');

(function main() {
	const places = ['Makha', 'Uae', 'Paris', 'Newzeland', 'Usa', 'France',];

	console.log('Places list', places);

	const newPlaces = [...places].sort();

	console.log('Places sorted alphabetical in order', newPlaces);
	const reversePlaces = [...newPlaces.reverse()];

	console.log('Places sorted reverse order', reversePlaces);

	console.log('Places list', places);
})();

/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.
*/
console.log('Prob 19');

newGuestList.forEach(name => {
	console.log('newGuestList who are invited', name);
});


/*
Think of something you could store in a array. For example,
 you could make a list of mountains, rivers, countries, cities, languages, or anything
 else you’d like. Write a program that creates a list containing these items.
*/
console.log('Prob 20');
let cities = [];

function addValue(val) {
	cities.unshift(val);
	return cities;
};

console.log(addValue('Lahore'));
console.log(addValue('Multan'));
console.log(addValue('Sailkot'));
console.log(addValue('Isb'));


/*
They think of something you could store
in a JavaScript Object. Write a program
that creates Objects containing these items.
*/
console.log('Prob 21');

let names = {};

function addNames(key, val) {
	return names[key] = val;
};

console.log(addNames(0, 'Lahore'));
console.log(addNames(1, 'Multan'));
console.log(addNames(2, 'Sailkot'));
console.log(addNames(3, 'Isb'));
console.log(names);


/*
Intentional Error: If you haven’t
 received an array index error in
	one of your programs yet, try to
	 make one happen. Change an index
		in one of your programs to produce an index error.
		 Make sure you correct the error before closing the program.
*/
console.log('Prob 22');

console.log('Intentional array index Error', newGuestList[100000]);


/*
Conditional Tests: Write a series of conditional
tests. Print a statement describing each test
and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
console.log('Prob 22');

console.log(false === false); //  true
console.log(false === 'false'); //  false
console.log(false === 0); //  false
console.log(true === true); //  true
console.log(true === 'true'); //  false
console.log(true === 1); //  false

console.log(true == 1); //true
console.log(false == 0); //true


/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
console.log('Prob 24');

console.log(1 !== 1);
// expected output: false

console.log('hello' !== 'hello');
// expected output: false

console.log('1' !== 1);
// expected output: true

console.log(0 !== false);
// expected output: true

"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false

console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' == 1);
// expected output: true

console.log(0 == false);
// expected output: true

console.log(5 >= 3);
// expected output: true

console.log(3 >= 3);
// expected output: true

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n >= 5);
// expected output: false

console.log('ab' >= 'aa');
// expected output: true

console.log(1 != 1);
// expected output: false

console.log('hello' != 'hello');
// expected output: false

console.log('1' != 1);
// expected output: false

console.log(0 != false);
// expected output: false

/*
Alien Colors #1: Imagine an alien was
 just shot down in a game. Create a
	variable called alien_color and assign
	 it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether
 the alien’s color is green. If it is,
	print a message that the player just earned 5 points.

• Write one version of this program that
 passes the if test and another that fails.
	(The version that fails will have no output.)
*/
console.log('Prob 25');

let alien_color = 'green';
if (alien_color === 'green') {
	console.log('player just earned 5 points')
}

if (alien_color !== 'green') {
	console.log('')
};

/*
Alien Colors #2: Choose a color for an alien
 as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print
 a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green,
 print a statement that the player just earned 10 points.

• Write one version of this program that
 runs the if block and another that runs the else block.
*/
console.log('Prob 26');

if (alien_color == 'green') {
	console.log('player just earned 5 points');
} else if (alien_color !== 'green') {
	console.log('player just earned 10 points');
} else {
	console.log('');
};

/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this
 program, making sure each message is printed for the appropriate color alien.
*/
console.log('Prob 27');
let alien = ['green', 'yellow', 'red',]

alien.forEach(element => {
	if (element == 'green') {
		console.log('player just earned 5 points');
	} else if (element === 'yellow') {
		console.log('player just earned 10 points');
	} else if (element === 'red') {
		console.log('player just earned 15 points');
	} else {
		console.log('');
	};
});

/*
Stages of Life: Write an if-else chain that determines a person’s stage of life.
 Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/
console.log('Prob 28');


function checkAge(age) {
	if (age === 2 && age < 4) {
		return console.log('the person is a toddler');
	} if (age >= 4 && age < 13) {
		return console.log('the person is a kid');
	} if (age >= 13 && age < 20) {
		return console.log('the person is a teenager');
	} if (age >= 20 && age < 65) {
		return console.log('the person is a adult');
	} else {
		return console.log('the person is an elder.');
	};
};

checkAge(2);
checkAge(6);
checkAge(14);
checkAge(26);
checkAge(70);


/*
Favorite Fruit: Make a array of your
 favorite fruits, and then write a series of independent
	if statements that check for certain fruits in your array.
• Make a array of your three favorite
 fruits and call it favorite_fruits.

• Write five if statements. Each should check
 whether a certain kind of fruit is in your array.
	If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
console.log('Prob 29');

function guessFurits() {

	const favorite_fruits = ['Apple', 'Banana', 'Pear'];

	favorite_fruits.forEach(element => {
		if (element === 'Apple') {
			console.log('such as You really like', element);
		} else if (element === 'Banana') {
			console.log('such as You really like !', element);
		} else if (element === 'Pear') {
			console.log('such as You really like bananas!', element);
		} else {
			return console.log('Don’t like furits.......');
		};
	});
};

guessFurits();


/*
Hello Admin: Make a array of five or
 more usernames, including the name 'admin'.
	Imagine you are writing code that will print
	 a greeting to each user after they log in to
		a website. Loop through the array,
		 and print a greeting to each user:
• If the username is 'admin', print a
 special greeting, such as Hello admin,
	would you like to see a status report?

• Otherwise, print a generic greeting,
 such as Hello Eric, thank you for logging in again.
*/
console.log('Prob 30');
const usernames = ['Admin', 'Mike', 'Tammy', 'User'];
function greetings() {

	usernames.forEach(element => {
		if (element === 'Admin') {
			console.log('Hello admin, would you like to see a status report?', element);
		} else if (element === 'Mike') {
			console.log('Hello!', element);
		} else if (element === 'Tammy') {
			console.log('Hello!', element);
		} else {
			return console.log('When to new', element);
		};
	});
};

greetings();

/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
console.log('Prob 31');

if (!usernames.length) {
	console.log('Please add some user');
}

usernames.splice(0, usernames.length)
console.log(usernames);


/*
Checking Usernames: Do the following to create
 a program that simulates how websites
	ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames
 called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see
 if each new username has already been used. If
it has, print a message that the person will need
to enter a new username. If a username has not
 been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive.
 If 'John' has been used, 'JOHN' should not be accepted.
*/
console.log('Prob 32');

const current_users = ['Adil', 'Mike', 'Tammy', 'Umar', 'Hassan'];
const new_users = ['A1', 'Adil', 'MIKE', 'U4', 'Umar'];

function checkname() {
	new_users.forEach((element, index) => {
		if (element === current_users[index]) {
			console.log("the person will need to enter a new username")
		}
		console.log("username is available")
	});
};
checkname();

/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3. Store the numbers 1 through 9 in a array.
Loop through the array. Use an if-else chain inside the loop to print the proper ordinal
*/
console.log('Prob 33');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((num) => {
	if (num === 1) {
		console.log('1st')
	} else if (num === 2) {
		console.log('2nd')
	} else if (num === 3) {
		console.log('3rd')
	} else {
		console.log(`${num}th`)
	}
});

/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should have
one line of output containing a simple statement like I like pepperoni pizza.
Add a line at the end of your program, outside the for loop, that states how much you
like pizza. The output should consist of three or more lines about the kinds of pizza you
like and then an additional sentence, such as I really love pizza!
*/
console.log('Prob 34');

const pizzas = ['chicken tikka', 'Lazana', 'Fajita', 'Supreme'];

pizzas.forEach((pizza) => {
	console.log(`I like ${pizza} pizza`)
});

console.log('I like pizza very much. I am a cheesy lover and like these kinde of pizzas')

/*
 Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out
 the name of each animal. • Modify your program to print a statement about each animal,
 such as A dog would make a great pet. • Add a line at the end of your program stating what
 these animals have in common. You could print a sentence such as Any of these animals would
 make a great pet!
*/
console.log('Prob 35');


const animals = ['cow', 'lion', 'camel'];

for (let i = 0; i < animals.length; i++) {
	console.log(`${animals[i]}  has four legs.`);
};


/*
T - Shirt: Write a function called make_shirt() that accepts a size and the text of a
message that should be printed on the shirt. The function should print a sentence
summarizing the size of the shirt and the message printed on it. Call the function.
*/

console.log('Prob 36');

(function make_shirt(text, size) {
	console.log(`${text} ${size}`)
})('This is a shirt of size', 'small');
/*
 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love JavaScript.
 Make a large shirt and a medium shirt with the default message,
	and a shirt of any size with a different message.
*/
console.log('Prob 37');

function make_shirt(text, size = 'large') {
	console.log(`${text} ${size}`)
};

make_shirt('This is a shirt of size');


/* Cities: Write a function called describe_city() that accepts the name of a
city and its country.The function should print a simple sentence, such as Karachi
is in Pakistan.Give the parameter for the country a default value.Call your function for
three different cities, at least one of which is not in the default country.
*/
console.log('Prob 38');

const describe_city = (city, country = 'Pakistan') => {
	console.log(`${city} is in ${country}`)
};

describe_city('karachi', 'Pakistan')
describe_city('lahore');
describe_city('peshawar', 'Pakistan');

/*
 City Names: Write a function called city_country() that takes in the
 name of a city and its country.The function should return a
 string formatted like this: "Lahore, Pakistan"
*/

console.log('Prob 38');

const city_country = (city, country) => {
	console.log(`${city}, ${country}`)
};

city_country('Lahore', 'Pakistan')
city_country('London', 'UK')
city_country('New york', 'USA')

/*
 Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information.Use the function to make three dictionaries
representing different albums.Print each return value to show that Objects are storing the album
information correctly.Add an optional parameter to make_album() that allows you to store the number
of tracks on an album.If the calling line includes a value for the number of tracks, add that value to the album's Object.
Make at least one new function call that includes the number of tracks on an album.
*/

console.log('Prob 38');

const make_album = (artistName, albumTitle, numberOfTracks) => {
	const toReturn = {
		artistName: artistName,
		albumTitle: albumTitle,
	}
	if (numberOfTracks) {
		toReturn.numberOfTracks = numberOfTracks;
	}

	return toReturn;
};

console.log(make_album('Atif', 'Lamhe'));
console.log(make_album('Ali Azmat', 'Junoon'));
console.log(make_album('Katy Perry', 'Smile', 7));

/*
 Magicians: Make a array of magician's names. Pass the array to a
function called show_magicians(), which prints the name of each
magician in the array.
*/

console.log('Prob 41');


let magicians = ['Harry Houdini', 'David Copperfield', 'Criss Angel'];

const show_magicians = (magiciansList) => {
	magiciansList.forEach((magician) => {
		console.log(magician)
	});
};

show_magicians(magicians);
/*
 Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician's name. Call show_magicians() to see that the list has
actually been modified.

 Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians' names.
Because the original array will be unchanged, return the new array and store it in
	a separate array.Call show_magicians() with each array to show that you have one array of
the original names and one array with the Great added to each magician's name.
*/

console.log('Prob 42');
console.log('Prob 43');


const make_great = (magiciansList) => {
	return magiciansList.map((magician) => {
		return `${magician} Great`
	});
};

const updatedArray = make_great([...magicians]);
show_magicians(magicians);
show_magicians(updatedArray);

/*
Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich.The function should have one parameter that collects as many items as
	the function call provides, and it should print a summary of the sandwich that is
being ordered.Call the function three times, using a different number of arguments each time.
*/

console.log('Prob 44');

const makeSandwich = (items) => {
	let summary = `The sandwich has`;
	items.forEach((item, i) => {
		summary = `${summary}${i === 0 ? '' : 'and'} ${item}`
	});
	console.log(summary)
};

makeSandwich(['Cheese', 'Ham salad', 'Sausage'])
makeSandwich(['Egg', 'Ham salad', 'onion'])
makeSandwich(['Grilled Chicken', 'mayonnaise', 'Sausage'])
/*
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. Call the
function with the required information and two other name-value pairs, such as a
color or an optional feature. Print the Object that's returned to make sure all the
information was stored correctly.
*/

console.log('Prob 45');

const saveCarInfo = (manufacturer, modelName, ...arguments) => {
	console.log(arguments, 'argss')
	let toReturn = {
		manufacturer: manufacturer,
		modelName: modelName,
	}
	arguments.forEach((item) => {
		toReturn = {...toReturn, ...item};
	})
	return toReturn;
};

console.log(saveCarInfo('honda', '2017', {color: 'black'}, {milage: '4000'}));
