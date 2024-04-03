// 1. Create a function that takes two arguments as functions and return their sum:

// function addition(num1, num2) {
//   return num1 + num2
// }

// console.log(addition(3, 5));

// ---------------------------------------------------------------

// 2. Create a function that converts hours into seconds:

// function hoursIntoSeconds(hour) {
//   return hour * 60 * 60;
// }

// console.log(hoursIntoSeconds(2));

// ---------------------------------------------------------------

// 3. Create a function that takes length and width of a rectangle and return its perimeter (p = 2l + 2w):

// function calcPerimeter(length, width) {
//   return 2 * length + 2 * width
// }

// console.log(calcPerimeter(10, 20));

// ---------------------------------------------------------------

// 4. Write a function that takes the base and height of a triangle and return its area (a = 0.5 * b * h):

// function calcAreaOfTriangle(base, height) {
//   return 0.5 * base * height;
// }

// console.log(calcAreaOfTriangle(20, 20));

// ---------------------------------------------------------------

// 5. Write a function that accepts a string and adds 'Frontend' on the end of it:

// function appendFrontend(string) {
//   return string + 'Frontend'
// }

// console.log(appendFrontend('Apple'));

// ---------------------------------------------------------------

// 6. Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, returns false:

// function sumGreaterThan100(num1, num2) {
//   if (num1 + num2 >= 100) {
//     return true;
//   }
//   return false;
// }

// console.log(sumGreaterThan100(50, 51));

// SIMPLIFIED --------------------------

// function sumGreaterThan100(num1, num2) {
//   return num1 + num2 >= 100;
// }

// console.log(sumGreaterThan100(50, 51));

// ---------------------------------------------------------------

// 7. Write a function that accepts a number and returns true if it is less than or equal to zero. Otherwise, returns false:

// function lessThanOrEqualToZero(num) {
//   return num <= 0;
// }

// console.log(lessThanOrEqualToZero(-5));

// ---------------------------------------------------------------

// 8. Given a boolean (true or false), return the opposite boolean:

// function oppositeBoolean(bool) {
//   return !bool;
// }

// console.log(oppositeBoolean(false));

// ---------------------------------------------------------------

// 9. Given ANY element, return true if it is NOT the number 0:

// function isNotZero(num) {
//   return num !== 0;
// }
// console.log(isNotZero(5));

// - if (1 !== 0) returns a boolean by default, you can return straight away

// ---------------------------------------------------------------

// 10. Given two numbers, return their remainder when divided by each other:

// function calcRemainder(num1, num2) {
//   return num1 % num2;
// }

// console.log(calcRemainder(7, 8));

// ---------------------------------------------------------------

// 11. Given a number, return true if the number is odd:

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// console.log(isOdd(5));

// ---------------------------------------------------------------

// 12. Create a function that takes a number argument and returns 1 if the number is even. If the number is odd, return -1:

// function booleanInteger(num) {
//   return num % 2 === 0 ? 1: -1;
// }

// console.log(booleanInteger(8));

// - Using Ternary Operator

// ---------------------------------------------------------------

// 13. Create a function that takes in two strings. If the first string = 'LOGGED_IN' AND the second string = 'SUBSCRIBED' return true. Otherwise, return false:

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
//   return loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED';
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));

// ---------------------------------------------------------------

// 14. Create a function that takes in two strings. If the first string = 'LOGGED_IN' OR the second string = 'SUBSCRIBED' return true. Otherwise, return false:

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
//   return loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED';
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));