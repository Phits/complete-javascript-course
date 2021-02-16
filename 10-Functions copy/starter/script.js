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
}

createBooking('LH123', 2,);
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000);