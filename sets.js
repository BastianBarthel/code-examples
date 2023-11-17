// Create a Set
const ordersSet = new Set(["Pasta", "Pizza", "Risotto"]);
const chars = new Set("Bastian");

// Methods
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");

// Iteration
for (const order of ordersSet) console.log(order);

// Remove Duplicates from an Array
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Waiter", "Chef"];
const staffUnique = [...new Set(staff)];

// How many Unique Characters are in a String
console.log(new Set("bastianbarthel").size);
