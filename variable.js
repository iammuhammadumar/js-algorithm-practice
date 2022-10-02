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
