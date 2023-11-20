const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane.length);

// Get Sub String
console.log(airline.slice(4, 7));
console.log(airline.slice(-1)); // last character
console.log(airline.slice(0, airline.indexOf(" "))); // first word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // last word
