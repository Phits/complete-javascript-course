'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        let output = `${firstName} are ${age}, born in ${birthYear}`;
        console.log(output);
       
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

             // Creating NEW variable with same name as outer scope variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'New Output!';
            console.log(output);

            const str = `Oh, and you're  a millenial, ${firstName}`;
            console.log(str);
    
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
