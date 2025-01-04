// 11. Write a function to reverse the words in the string: `"Hello World!"`.

const reverseWordsInString = (strings) => {
  const arrayOFWords = strings.split(" ")
  return arrayOFWords.reverse().join(" ")
};

console.log(reverseWordsInString("Hello World!"));
console.log(reverseWordsInString("Hello javascript world"));

