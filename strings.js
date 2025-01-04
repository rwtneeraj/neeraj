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


// 13. Replace all occurrences of `"foo"` with `"bar"` in `"foofoofoo"`.

const replaceAllOccurence = (string,target,replacement) => {
  return string.replaceAll(target, replacement);
};

console.log(replaceAllOccurence("foofoofoo", "foo", "bar"));  //barbarbar
console.log(replaceAllOccurence("foofoofoo", "foo", ""));    //""

// 14. Count the number of vowels in the string `"Beautiful Day"`.

const vowelsCounter = (string) => {
  const vowels = "AEIOUaeiou";
  let count = 0;

  for (let index = 0; index < string.length; index++) {
    count += vowels.includes(string[index]) ? 1 : 0;
  }

  return count;
};

console.log(vowelsCounter("Beautiful Day"));  //6
console.log(vowelsCounter("wonderful Day"));  //4
console.log(vowelsCounter(""));               //0