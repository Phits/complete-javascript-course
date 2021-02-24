'use strict';

// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never do this
//     // this.calcAge = function() {
//     //     console.log(2021 - this.birthYear);
//     // }
// }

// const john = new Person('John', 1981);

// console.log(john);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {};

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1985);
// console.log(matilda, jack);

// console.log(john instanceof Person);

// Person.hey = function() {
//     // console.log(`Hey there `);
//     // console.log(this);
// }
// Person.hey();

////////////////////////////////////////////////
// Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function() {
//     // console.log(2021 - this.birthYear);
// }

// john.calcAge();
// jack.calcAge();

// console.log(john.__proto__);
// console.log(john.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects is a better description

// Person.prototype.species = 'Home Sapiens';
// console.log(john.species, matilda.species);

// console.log(john.john);

// console.log(john.hasOwnProperty('firstName'));
// console.log(john.hasOwnProperty('species'));

// console.log(john.__proto__);
// Object.prototype (top of prototype chain)
// console.log(john.__proto__.__proto__);
// console.log(john.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [1, 3, 4, 5, 6, 6, 6, 6, 3, 8, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Not a goof idea, just an example
Array.prototype.unique = function() {
    return [...new Set(this)];
}

// console.log(arr.unique);

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

//////////////////////////////////////////////////
// Challenge 1
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// } 

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going ${this.speed} mpg`);
// }

// Car.prototype.break = function() {
//     this.speed -= 10;
//     console.log(`${this.make} is going ${this.speed} mpg`);
// }

// const bmw = new Car('BMW', 120);
// const honda = new Car('Honda', 160);

// // console.log(bmw.make);
// bmw.accelerate();
// bmw.break();
// bmw.break();
// bmw.break();
// bmw.accelerate();
// bmw.accelerate();

// // console.log(honda.make);
// honda.accelerate();
// honda.accelerate();
// honda.accelerate();
// honda.break();
// honda.accelerate();

// ES6 Classes
// class expression
// const PersonCL = class {}

//////////////////////////////////////////////////////////////
// Class declaration
// class PersonCL {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // Instance Methods
//     // Methods will be added to .prototype property
//     calcAge() {
//         // console.log(2021 - this.birthYear);
//     }

//     greet() {
//         // console.log(`Hey ${this.fullName}!`);
//     }

//     get age() {
//         return 2021 - this.birthYear;
//     }

//     // Set a property that already exists
//     set fullName(name) {
//         // console.log(name);
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static method (not inherited)
//     static hey() {
//         // console.log('Hey there');
//     } 
// }

// const jessica = new PersonCL('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(`age set ${jessica.age}`);

// console.log(jessica.__proto__ == PersonCL.prototype);

// PersonCL.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}!`);
// }

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first class citizens (Can be passed into functions and return functions)
// 3. Body of a class is executed in strict mode

/////////////////////////////////////////////////
// Getters and Setters (accessor properties)

// const walter = new PersonCL('Walter White', 1965);

// PersonCL.hey();

const account = {
    owner: 'john',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

// console.log(account.latest);

account.latest = 50;
// console.log(account.movements);

// Objects.create, least used way to create prototype inheritence
// const PersonProto = {
//     calcAge() {
//         // console.log(2021 - this.birthYear);
//     },

//     inti(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// // console.log(steven);
// // Do use this 
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// // console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.inti('Sarah', 1979);
// sarah.calcAge();

//////////////////////////////////////////
// Challenge #2
// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//    }

//    accelerate() {
//     this.speed += 10;
//     // console.log(`${this.make} is speeding up at ${this.speed} km/h`);
//    }

//    break() {
//     this.speed -= 5;
//     // console.log(`${this.make} is slowing down at ${this.speed} km/h`);
//    }

//     get speedUs() {
//         return this.speed / 1.6;
//     }

//     set speedUs(speed) {
//         this.speed = speed * 1.6;
//     }
// œ
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);
// console.log('US Speed', ford.speedUs);

// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.break();
// ford.break();
// ford.speedUs = 50;
// console.log(ford);

// Inheritance Between "Classes": Constructor Functions
// Construtor Function
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    // console.log(2021 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    // console.log(`My name is ${this.firstName} I and study ${this.course}`);
}

const mike = new Student('Mike', 2001, 'Computer Science');
// console.log(mike);
mike.introduce();
mike.calcAge();
// console.log(mike.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

////////////////////////////////////////////////////////////////////////////
// Challenge #3
const CarTwo = function(make, speed) {
    this.make = make;
    this.speed = speed;
} 

CarTwo.prototype.accelerate = function() {
    this.speed += 10;
    // console.log(`${this.make} is going ${this.speed} mpg`);
}

CarTwo.prototype.break = function() {
    this.speed -= 10;
    // console.log(`${this.make} is going ${this.speed} mpg`);
}

const Ev = function(make, speed, charge) {
    CarTwo.call(this, make, speed);
    this.charge = charge;
}

Ev.prototype = Object.create(CarTwo.prototype);

Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    // console.log(`Charge to ${this.charge}`);
}

Ev.prototype.accelerate = function() {
    this.speed += 20;
    this.charge = this.charge - (this.charge * .01);
    // console.log(`Speed is ${this.speed} and charge is ${this.charge}`);
}

const tesla = new Ev('Tesla', 120, 23); 

// console.log(tesla);
tesla.chargeBattery(100);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(100);

///////////////////////////////////////////////////////////////////////
// ES 6 Classes
// Class declaration
class PersonCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance Methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}!`);
    }

    get age() {
        return 2021 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        // console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method (not inherited)
    static hey() {
        // console.log('Hey there');
    } 
}

class StudentCL extends PersonCL {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first because it creates 'this' key word!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} I and study ${this.course}`);
    }

    calcAge() {
        console.log(`I am ${2021 -this.birthYear} but feel like I am ${2021 - this.birthYear + 10}`)
    }

}

const martha = new StudentCL('Martha Jones', 2002, 'Computer Science');
// martha.introduce();
// martha.calcAge();

//////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProto = {
    calcAge() {
        // console.log(2021 - this.birthYear);
    },

    inti(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.inti = function(firstName, birthYear, course) {
    PersonProto.inti.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    // console.log(`My name is ${this.fullName} I and study ${this.course}`);
}


const jay = Object.create(StudentProto);
jay.inti('Jay', 2001, "CS");
jay.introduce();
jay.calcAge();

/////////////////////////////////////////////////////////
// Another Class Example

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Public fields

// (there is also a static version)

class Account {
    // 1. Define public field (on all instances)
    locale = navigator.language;

    // 2. Private fields # Only supported in Chrome
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected Property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        // console.log(`Thanks for opening an account, ${this.owner}`);
    }

    // Public Interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if (this._approveLoan()) {
            this.deposit(val);
            // console.log('Loan approved');
            return this;
        }
    }

    static helper() {
        // console.log('Helper');
    }

    // 4. Private methods # Not supported yet
    _approveLoan() {
        return true;
    }
}

const acc1 = new Account('John', 'EUR', 1234);

// Not good
// acc1.#movements.push(250);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(100);
// console.log(acc1.getMovements());
Account.helper()

// Unavailable 
// console.log(acc1.#pin);
// console.log(acc1.#movements);

///////////////////////////////////////////////
// Chaining methods
acc1.deposit(300).deposit(500).withdraw(25).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

//////////////////////////////////////
// Challenge 4
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
   }

   accelerate() {
    this.speed += 10;
    // console.log(`${this.make} is speeding up at ${this.speed} km/h`);
   }

   break() {
    this.speed -= 5;
    console.log(`${this.make} is slowing down at ${this.speed} km/h`);
    return this;
   }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(speed) {
        this.speed = speed * 1.6;
    }
}

class EvCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Charge to ${this.#charge}`);
        return this;
    }
    
    accelerate() {
        this.speed += 20;
        this.#charge = this.#charge - (this.#charge * .01);
        console.log(`Speed is ${this.speed} and charge is ${this.#charge}`);
        return this;
    }
}

const rivian = new EvCl('Rivian', 120, 23);

console.log(rivian);
rivian.accelerate().accelerate().break().chargeBattery(100).accelerate();
console.log(rivian.speedUs);
