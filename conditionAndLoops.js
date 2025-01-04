// 26. Write a program to print the Fibonacci sequence up to 10 terms using a `for` loop.
const getFibonacciSeries = function (noOfTerms) {
  const fibonacciSeries = [];
  let previousTerm = 0;
  let currentTerm = 1;

  for (let index = 1; index <= noOfTerms; index++) {
    fibonacciSeries.push(previousTerm);

    const nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return fibonacciSeries;
};

// console.log(getFibonacciSeries(10));

// 30. Implement a function to find the greatest common divisor (GCD) of two numbers using recursion.

const isBothNumsDivsibleByFactor = (num1, num2, factor) => {
  return num1 % factor === 0 && num2 % factor === 0;
};

const greatestCommonDivisor = function (num1, num2, factor, hcf) {
  const smallestNumber = num1 < num2 ? num1 : num2;

  if (factor > smallestNumber) {
    return hcf;
  }

  if (isBothNumsDivsibleByFactor(num1, num2, factor)) {
    hcf = factor;
  }

  return greatestCommonDivisor(num1, num2, factor + 1, hcf);
};

const getGCDOfTwoNumbers = (num1, num2) => {
  return greatestCommonDivisor(num1, num2, 1, 0);
}

console.log(getGCDOfTwoNumbers(12, 15));
