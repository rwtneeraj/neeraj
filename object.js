// 16. Create an object to store information about a car (e.g., make, model, year). Add a method to display its details.\

const carInformation = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

const displayCarInformation = (carInformation) => {
  console.log(carInformation);
};

displayCarInformation(carInformation);

// 17. Merge two objects:
//     ```javascript
//     let obj1 = { a: 1, b: 2 };
//     let obj2 = { b: 3, c: 4 };
//     ```

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergeTwoObject = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// console.log(mergeTwoObject(obj1, obj2));


// 18. Write a function to count the occurrences of each character in a string and return the result as an object.
const occurrencesOfEachChar = (string) => {
  const obj = {};

  for (let index = 0; index < string.length; index++) {
    const char = string[index];
    obj[char] = (Object.keys(obj)).includes(char) ? obj[char] + 1 : 1;
  }
 
  return obj;
}

console.log(occurrencesOfEachChar("hello"));
console.log(occurrencesOfEachChar("neeraj"));

// 19. Dynamically add a property `color` to an object representing a fruit.x

