// 11. Write a function to reverse the words in the string: `"Hello World!"`.

const reverseWordsInString = (strings) => {
  const arrayOFWords = strings.split(" ");
  return arrayOFWords.reverse().join(" ");
};

console.log(reverseWordsInString("Hello World!"));
console.log(reverseWordsInString("Hello javascript world"));

// 12. Check if the string `"JavaScript"` contains only alphanumeric characters using regex.

const containsAlphanumeric = (string) => {
  const regex = /^[a-zA-Z0-9]+$/g;
  return regex.test(string);
};

console.log(containsAlphanumeric("56kk22"));
console.log(containsAlphanumeric("javaScript"));
