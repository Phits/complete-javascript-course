'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        let output = `${firstName} are ${age}, born in ${birthYear}`;
        // console.log(output);
       
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

             // Creating NEW variable with same name as outer scope variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'New Output!';
            // console.log(output);

            const str = `Oh, and you're  a millenial, ${firstName}`;
            // console.log(str);
    
            function add(a, b) {
                return a + b;
            }
    
           
            
        }
    }
    
    printAge();

    return age;
}

const firstName = 'John';
calcAge(1988);

// Hoisting Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'John';
// let job = 'Developer';
// const year = 1988;

// Hoisting Functions
// console.log( addDecl(2,3) );
// console.log( addDecl(2,3) );
// console.log( addArrow(2,3) );

function addDecl(a,b) {
    return a + b;
}

// const addExpr = function(a,b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// Example
// console.log(numberOfProducts);

if (!numberOfProducts) deleteShoppingCart();

var numberOfProducts = 10;

function deleteShoppingCart() {
    // console.log('All products deleted')
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(x === window.z);

// This

// console.log(this);

const calcAgeTwo = function(birthYear) {
    // console.log(2021 - birthYear);
    // console.log(this);
};

calcAgeTwo(1991);

const calcAgeArrow = birthYear => {
    // console.log(2021 - birthYear);
    // console.log(this);
};

calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2021 - this.year);
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// f();

// Regular functions vs arrow functions

// var firstNameTwo = 'Matilda';

const jonas = {
    firstNameTwo: 'John',
    year: 1991,
    calcAge: function() {
       
        // console.log(2021 - this.year);

        // Solution One
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // };

        // Solution Two
        const isMillenial = () => {
            // console.log(this);
            // console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstNameTwo}`),
    greetTwo: function() {
        // console.log(`Hey ${this.firstNameTwo}`);
    },
};

jonas.calcAge();

// Arguments keyword
const addExpr = function(a,b) {
    // console.log(arguments);
    return a + b;
}

addExpr(2, 5, 7, 12);

var addArrow = (a, b) => {
    return  a + b
};

addArrow(1, 2, 5, 8);

// Primitives vs Objects (Primitive vs Reference Types)
let age = 30;
let oldAge = age;
age = 31;
// console.log(age);
// console.log(oldAge);

const me = {
    name: 'John',
    age: 33,
}

const friend = me;
friend.age = 23;
// console.log('Me ', me);
// console.log('Friend ', friend);

// Primitives Types
let lastName = 'Fitz'
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference Types
const suzie = {
    firstName: 'Suzie',
    lastName: 'Williams',
    age: 27,
}

const marriedJessica = suzie;
marriedJessica.lastName = 'Fitz';
// console.log('Before', suzie);
// console.log('After', marriedJessica);

// Copying Objects
const suzieTwo = {
    firstName: 'Suzie',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const suzieCopy = Object.assign({}, suzieTwo);
suzieCopy.lastName = 'Davis';


suzieCopy.family.push('Mary');
suzieCopy.family.push('john');

console.log('Before', suzieTwo);
console.log('After', suzieCopy);