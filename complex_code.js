/* filename: complex_code.js
   content: A complex and elaborate JavaScript code showcasing various programming concepts and techniques.
*/

// Utility function to generate a random number in a given range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Function to generate an array of random persons
function generateRandomPersons(numPersons) {
  const persons = [];
  
  for (let i = 0; i < numPersons; i++) {
    const name = `Person ${i+1}`;
    const age = Math.floor(getRandomNumber(18, 60));
    persons.push(new Person(name, age));
  }
  
  return persons;
}

// Function to filter persons based on their age
function filterPersonsByAge(persons, minAge, maxAge) {
  return persons.filter(person => person.age >= minAge && person.age <= maxAge);
}

// Function to sort persons by their name
function sortPersonsByName(persons) {
  return persons.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to calculate the average age of persons
function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  return totalAge / persons.length;
}

// Entry point of the program
function main() {
  const numPersons = 1000;
  const minAge = 25;
  const maxAge = 40;

  console.log(`Generating ${numPersons} random persons...`);
  const persons = generateRandomPersons(numPersons);

  console.log(`Filtering persons between ${minAge} and ${maxAge} years...`);
  const filteredPersons = filterPersonsByAge(persons, minAge, maxAge);

  console.log('Sorting persons by name...');
  const sortedPersons = sortPersonsByName(filteredPersons);

  console.log('Calculating average age...');
  const averageAge = calculateAverageAge(sortedPersons);

  console.log(`Average age of the filtered and sorted persons: ${averageAge}`);
}

// Run the program
main();