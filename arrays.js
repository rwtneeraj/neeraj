// 6. Use `reduce` to calculate the product of all elements in `[1, 2, 3, 4, 5]`

const product = (numbers) => {
  return numbers.reduce((mul, num) => {
    mul = mul * num;
    return mul
  });
};

console.log(product([1, 2, 3, 4, 5]));  //120
console.log(product([2,2,3]));         //12
  