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

// Split a String
const [firstName, lastName] = "Bastian Barthel".split(" ");

// Join multiple Strings
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Padding
console.log(firstName.padStart(10, "*").padEnd(13, "*"));

// Repeat
const message = "Storm warning...All Flights Cancelled...";
console.log(message.repeat(5));

// Mask Credit Card Example
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

maskCreditCard(50084139223821);

// Capitalize Name Example
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("bastian barthel");
