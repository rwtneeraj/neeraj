// 21. Write a function to check if a number is even or odd.

const isEvenOrOdd = (num) => {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
};

console.log(isEvenOrOdd(2))
console.log(isEvenOrOdd(3))
console.log(isEvenOrOdd(6));

// 22. Create an arrow function that calculates the cube of a number.

const cubeOfNumber = (number) => {
  return Math.pow(number, 3);
};

console.log(cubeOfNumber(2));
console.log(cubeOfNumber(3));
console.log(cubeOfNumber(4));

// 23. Implement a closure to create a counter that increments by a given value.

const increament = function (value) {
  let counter = 0;
  return function(){
    counter += value;
    return counter;
  }
}

const increamentBy2 = increament(2);
console.log(increamentBy2());   //2
console.log(increamentBy2());   //4
console.log(increamentBy2());   //6