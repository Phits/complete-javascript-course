'use strict';

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear);
    // }
}

const john = new Person('John', 1981);

console.log(john);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {};

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1985);
console.log(matilda, jack);

console.log(john instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear);
}

john.calcAge();
jack.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects is a better description

Person.prototype.species = 'Home Sapiens';
console.log(john.species, matilda.species);

console.log(john.john);

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));

console.log(john.__proto__);
// Object.prototype (top of prototype chain)
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 3, 4, 5, 6, 6, 6, 6, 3, 8, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Not a goof idea, just an example
Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique);

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Challenge
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
} 

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} mpg`)
}

Car.prototype.break = function() {
    this.speed -= 10;
    console.log(`${this.make} is going ${this.speed} mpg`)
}

const bmw = new Car('BMW', 120);
const tesla = new Car('Tesla', 160);

console.log(bmw.make);
bmw.accelerate();
bmw.break();
bmw.break();
bmw.break();
bmw.accelerate();
bmw.accelerate();

console.log(tesla.make);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.break();
tesla.accelerate();



