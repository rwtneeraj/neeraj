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

console.log(mergeTwoObject(obj1, obj2));