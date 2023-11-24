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

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}.`);
  };
};

const greeterHello = greet("Hello");
greeterHello("Bastian");

greet("Hey")("Jude");
