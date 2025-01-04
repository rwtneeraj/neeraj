// 6. Use `reduce` to calculate the product of all elements in `[1, 2, 3, 4, 5]`

const product = (numbers) => {
  return numbers.reduce((mul, num) => {
    mul = mul * num;
    return mul;
  });
};

console.log(product([1, 2, 3, 4, 5])); //120
console.log(product([2, 2, 3])); //12

// 7. Write a function to remove all falsy values from an array: `[0, 1, false, 2, '', 3, null, 4, undefined]`.

const removeAllFalsyValue = (array) => array.filter((value) => value);

console.log(removeAllFalsyValue([0, 1, false, 2, "", 3, null, 4, undefined]));
console.log(removeAllFalsyValue([0, 1, false, 2, "", 3, 4, 5, NaN, 0]));
console.log(removeAllFalsyValue(["NaN", NaN, "undefined", undefined]));

// 8. Use `filter` to extract all prime numbers from `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

const isPrime = (number) => {
  const end = Math.ceil(number / 2);
  let factor = 2;

  while (factor <= end) {
    if (number % factor === 0) return false;
    factor++;
  }

  return number >= 2;
}

const extractAllPrimeNumber = (numbers) => {
  return numbers.filter((num) => !isPrime(num));
}

console.log(extractAllPrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(extractAllPrimeNumber([2,5,7,9,4,6]));


// 9. Sort an array of strings by their length.

const sortedArrayOfStrings = (array) => {
  return array.sort((a, b) => {
    return a.length - b.length;
 });
};

console.log(sortedArrayOfStrings(["apple", "grapes", "banana", "pineapple"]));
console.log(sortedArrayOfStrings(["apple", "gas", "b", "pineapple"]));

// 10. Use `map` to create an array of the square roots of `[1, 4, 9, 16, 25]`.

const squareRooot = (numbers) => {
  return numbers.map((number) => number ** 0.5);
};

console.log(squareRooot([1, 4, 9, 16, 25]))


