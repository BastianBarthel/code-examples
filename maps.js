// Create a Map
const question = new Map([
  ["question", "What is the coolest programming language?"],
  [1, "C++"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🥳"],
  [false, "Try again!"],
]);

// Small Quiz App
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Your answer:"));
console.log(question.get(question.get("correct") === answer));

// Convert Object to Map
let openingHours = { open: 8, close: 20 };
const hoursMap = new Map(Object.entries(openingHours));

// Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
