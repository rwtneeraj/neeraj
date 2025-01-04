const validatePattern = function (string) {
  const regex = /^(\w\d)+$/;
  return regex.test(string);
};

console.log(validatePattern("a1b2c3"));
console.log(validatePattern("abc123"));
console.log(validatePattern("1a2b3c"));

const deepFlatten = function(array) {
  return array.flat(Infinity);
};

console.log(deepFlatten(([1, [2, [3, [4]], 5]])));
console.log(deepFlatten(([[[1, 2], 3], 4])));
