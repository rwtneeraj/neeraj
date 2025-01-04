// 26. Write a program to print the Fibonacci sequence up to 10 terms using a `for` loop.

const getFiboSeries = function (noOfTerms) {
  const fibonacciSeries = [];
  let prevTerm = 0;
  let currentTerm = 1;

  for (let index = 1; index <= noOfTerms; index++) {
    fibonacciSeries.push(prevTerm);

    const nextTerm = prevTerm + currentTerm;
    prevTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return fibonacciSeries;
};

console.log(getFiboSeries(10));
