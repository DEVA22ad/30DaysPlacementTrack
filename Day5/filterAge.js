const people = [
  { name: "John", age: 17 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Sam", age: 15 }
];

const adults = people.filter(person => person.age > 18);

console.log(adults);