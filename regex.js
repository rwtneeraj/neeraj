import { assert } from "jsr:@std/assert";

// 1. Write a regular expression to validate an email address.

const regexForValidEmailAddress = /[a-zA-Z]+\d*\.*\d*@gmail.com/;
  
const testRegexForValidEmailAddress = function () {
  console.log(regexForValidEmailAddress.test("neeraj2910@gmail.com"));  //true
  console.log(regexForValidEmailAddress.test("helloWorld.2345@gmail.com"));  //true
  console.log(regexForValidEmailAddress.test("fastTrack..@gmail.com"));  //true
  console.log(regexForValidEmailAddress.test("fastTrack..@.com"));    //false
  console.log(regexForValidEmailAddress.test(".@gmail.com"));    //false
};

// testValidDate();

// 2. Create a regex pattern to match a U.S. phone number format: `(123) 456-7890`

const regexForUSPhoneNoFormat = /\(\d{3}\)\s\d{3}-\d{4}/;

const testRegexForUSPhoneNoFormat = function () {
  console.log(regexForUSPhoneNoFormat.test("(123) 456-7890"));   //true
  console.log(regexForUSPhoneNoFormat.test(""));        //false
  console.log(regexForUSPhoneNoFormat.test("(123) 456"));        //false
  console.log(regexForUSPhoneNoFormat.test("(123) 4567890"));   //false
}

// testRegexForUSPhoneNoFormat();


// 3. Extract all the numbers from the string `"abc123def456ghi789"`.

const regexForExtractNumbers = /[\d]+/g;

const testRegexForExtractNumbers = function () {
  console.log(("abc123def456ghi789").match(regexForExtractNumbers)); 
  console.log(("5").match(regexForExtractNumbers)); 
  console.log(("aa").match(regexForExtractNumbers)); 
  console.log(("a5").match(regexForExtractNumbers)); 
};

testRegexForExtractNumbers();


// 4. Validate if a string starts with `"Hello"` and ends with `"World!"`.

const regexForStringStartWithHelloAndEndWorld = /^hello.*world$/; 

const testRegexForStringStartWithHelloAndEndWworld = function () {
  console.log(regexForStringStartWithHelloAndEndWorld.test("hello  world"));
  console.log(regexForStringStartWithHelloAndEndWorld.test("helloworld1"));
}

testRegexForStringStartWithHelloAndEndWworld();

// 5. Write a regex to find duplicate words in the string: `"This is is a test test string."`.
