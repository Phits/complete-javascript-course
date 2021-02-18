'use strict';

const bookings = [];

// ES 6 Default values
const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
    ) {

    // ES 5 Default Values
    // numPassengers = numPassengers || 1;
    // price = price || 199;
   
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
};

// createBooking('LH123', 2,);
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000);

// Passing arguments, value vs reference
const flight = 'LH1234';
const john = {
    name: 'John Fitz',
    passport: 9812899817434
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name; 

    if (passenger.passport === 9812899817434) {
        alert('Check In');
    } else {
        // alert('Wrong Passport');
    }
};

// checkIn(flight, john);
// console.log(flight);
// console.log(john);

// Is the same as doing...
const flightNum = flight;
const passport = john;

const newPassport = function(person) {
    person.passport = (Math.random() * 10000000000);
};

newPassport(john);
checkIn(flight, john);

// Functions Accepting Callback Functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    // console.log(`Original string: ' ${str}`);
    // console.log(`Transform string: ${fn(str)}`);

    // console.log(`Transform by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('Hi Five!');
};
// document.body.addEventListener('click', high5);
// ['John', 'Martha', 'Adam'].forEach(high5);

// Functions returning functions
const greet = function(greeting) {
    return function(name) {
        // console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('John');
greeterHey('Steven');

greet('Hello')('Peter');

// Challenge
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Yo')('Paul');

// The call and apply methods
const unitedair = {
    airline: 'United Airlines',
    iataCode: 'UA',
    bookings: [],
    // book: function() {}
    book(flight, name) {
        // console.log(`${name} booked a seat on ${this.airline} flight ${flight}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}, ${name}`});
    },
};

unitedair.book(239, 'John Fitz');
unitedair.book(356, 'Jack Ryan');

const americanair = {
    airline: 'American Airlines',
    iataCode: 'AA',
    bookings: [],
}

const book = unitedair.book;

// Does not work
// book(32, 'Sarah Williams');

// Call Method
book.call(americanair, 23, 'Sarah Williams');
// console.log(americanair);

book.call(unitedair, 239, 'Mary Cooper');
// console.log(unitedair);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'SA',
    bookings: []
}

book.call(swiss, 444, 'Mary Cooper');
// console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
// console.log(swiss);

// Spread Operator
book.call(swiss, ...flightData);

// Bind Method
// book.call(americanair, 23, 'Sarah Williams');

const bookUA = book.bind(unitedair);
const bookAA = book.bind(americanair);
const bookSA = book.bind(swiss);

bookUA(23, 'Steve Williams');

// Partial Application
const bookUA23 = book.bind(unitedair, 213);
bookUA23('Joe Bowman');
bookUA23('James Edwards');

// With Event Listeners
unitedair.planes = 300;
unitedair.buyPlane = function() {
    // console.log(this);

    this.planes++;
    // console.log(this.planes);
};
// this.undefined.buyPlane();

document.querySelector('.buy').addEventListener('click', unitedair.buyPlane.bind(unitedair));

// Partial Application

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value + value * rate;

// console.log(addVAT(100));
// console.log(addVAT(300));

// Challenge
const taxes = function(tax) {
    return function(cost) {
        // console.log(tax * cost + cost);
    }
}

const costTax = taxes(0.3);
costTax(100);
costTax(1000);

taxes(0.1)(50);


// Immediately Invoked Function Expressions (IIFE)
// const runOnce = function() {
//     console.log('This will never run again');
// }
// runOnce();

// IIFE
(function() {
    // console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

// (() =>  console.log('This will never run again'))
// ();

{
    const isPrivateTwo = 23;
    var notPrivate = 46;
}
// console.log(notPrivate);

// Closures
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        // console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();

booker();
booker();
booker();

// console.dir(booker);

// More Closures
// Example #1
let f;

const g = function() {
    const a = 23;
    f = function() {
        // console.log(a * 2);
    };
};

const h = function() {
    const b = 777;
    f = function() {
        // console.log(b * 2);
    };
}

g();
f();

// Re-assigned f function
h();
f();
// console.dir(f);

// Example #2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boaring all ${n} passengers`);
        console.log(`There are 3 groups with ${perGroup} in each group`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

// setTimeout(function(){
//     console.log('Timer');
// }, 1000);

// Closer priority over scope chain.
const perGroup = 1000;
boardPassengers(180, 3);

// Challenge 2
// IIEF
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    }, false);
  })();