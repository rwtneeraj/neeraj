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
console.log(removeAllFalsyValue(["NaN",NaN,"undefined",undefined]));
