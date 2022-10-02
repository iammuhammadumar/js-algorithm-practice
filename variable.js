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



let finalGuestList = newGuestList.splice(1, newGuestList.length - 5);

console.log('finalGuestList is', finalGuestList.length);