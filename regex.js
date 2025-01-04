// 1. Write a regular expression to validate an email address.

const regexForValidEmailAddress = /[a-zA-Z]+\d*\.*\d*@gmail.com/;
  
const testValidDate = function () {
  console.log(regexForValidEmailAddress.test("neeraj2910@gmail.com"));  //true
  console.log(regexForValidEmailAddress.test("helloWorld.2345@gmail.com"));  //true
  console.log(regexForValidEmailAddress.test("fastTrack..@gmail.com"));  //true
  console.log(regexForValidEmailAddress.test("fastTrack..@.com"));    //false
  console.log(regexForValidEmailAddress.test(".@gmail.com"));    //false
};

testValidDate();