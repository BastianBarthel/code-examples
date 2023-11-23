"use strict";

// default parameters (before ES6 this would have been done with short circuiting)
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH212");
createBooking("LH412", undefined, 1000); // skipping a value
