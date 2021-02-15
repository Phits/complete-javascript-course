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

var me = 'John';
let job = 'Developer';
const year = 1988;

// Hoisting Functions
// console.log( addDecl(2,3) );
// console.log( addDecl(2,3) );
// console.log( addArrow(2,3) );

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

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

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);
    }
}

jonas.calcAge();

const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

f();
