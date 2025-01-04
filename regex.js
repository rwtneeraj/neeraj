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

testRegexForUSPhoneNoFormat();