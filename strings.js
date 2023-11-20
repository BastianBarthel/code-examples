const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane.length);

// Get Sub String
console.log(airline.slice(4, 7));
console.log(airline.slice(-1)); // last character
console.log(airline.slice(0, airline.indexOf(" "))); // first word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // last word

// Changing Case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Get rid of leading and trailing white space
console.log(airline.trim());

// Replace Character
console.log(plane.replace("0", "1")); // replaceAll is now included in JS!

// Booleans
console.log(plane.includes("A32"));
console.log(plane.startsWith("B"));
console.log(plane.endsWith("20"));
