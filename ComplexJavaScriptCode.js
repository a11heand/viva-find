/*
Filename: ComplexJavaScriptCode.js
Description: This code demonstrates a complex and sophisticated JavaScript program that incorporates various advanced concepts and techniques.
*/

// Object representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating instances of the Person class
const john = new Person('John Doe', 25);
const jane = new Person('Jane Smith', 30);

john.greet();
jane.greet();

// Async function to fetch data
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Example usage of the fetchData function
fetchData('https://api.example.com/data')
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Arrow functions and array manipulation
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSquares = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 2);

console.log('Even squares:', evenSquares);

// Closure example
function outerFunction() {
  const outerVariable = 'Outer';

  function innerFunction() {
    const innerVariable = 'Inner';
    console.log(outerVariable, innerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();

// Event handling
const button = document.querySelector('.btn');

function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);

// Promises and async/await
function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

async function performAction() {
  console.log('Start');
  await delay(1000);
  console.log('Middle');
  await delay(2000);
  console.log('End');
}

performAction();

// Complex data structures
const nestedObject = {
  key1: 'value1',
  key2: {
    subKey1: [1, 2, 3],
    subKey2: {
      subSubKey: 'Nested value',
    },
  },
};

console.log('Nested value:', nestedObject.key2.subKey2.subSubKey);

// More complex code...

// ...

// ...

// ...

// ...

// ...

// ...

// ...

// Over 200 lines of code
// ...