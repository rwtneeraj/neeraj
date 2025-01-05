// What kind of pattern will you design to achieve this?
// ` pattern should start with one or more group of wordchar and digit followed with end`

const validatePattern = function (string) {
  const regex = /^(\w\d)+$/;
  return regex.test(string);
};

console.log(validatePattern("a1b2c3"));
console.log(validatePattern("abc123"));
console.log(validatePattern("1a2b3c"));


// Q. How will you handle varying levels of nesting?
// `there is direct way flat method in array by passing infinite or  anumber as a argument`
//   `other way is make new array and pass in reursion and push all value of nesting arrays element`

const deepFlatten = function(array) {
  return array.flat(Infinity);
};

console.log(deepFlatten(([1, [2, [3, [4]], 5]])));
console.log(deepFlatten(([[[1, 2], 3], 4])));

// What approach will you use to split and count the words?
// first i'll split by space that is converted into array, then apply reduce method 
// with two parameter object and element of array.

const wordFrequency = function (string) {
  const convertedString = string.split(" ");

  return convertedString.reduce((frequency, element) => {
      frequency[element] = (element in frequency) ? frequency[element] + 1 : 1;
      return frequency;
  }, {});
};

console.log(wordFrequency("hello world hello"));
console.log(wordFrequency("one fish two fish red fish blue fish"));
