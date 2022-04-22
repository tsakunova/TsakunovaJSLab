/* Optional: Write a function to count the sum of all values in an object using method borrowing. Ignore not a number values. Try to use both ways: Array.prototype.reduce.apply and [].reduce.call. Any of them is fine. Push the code in a separate file 'sumObjectValues.js' at the same repo.

Example:

function sumObjectValues() { ... }
let object = {
  a: 2,
  name: 'John',
  age: 23
};
sumObjectValues(object) // 25 */

const summValues = (accum, curr) => !isNaN(curr) ? accum+curr : accum;

const sumObjectValuesApply = obj => Array.prototype.reduce.apply(Object.values(obj), [summValues , 0]);

const sumObjectValuesCall = obj => [].reduce.call(Object.values(obj), summValues , 0);

let object = {
  a: 2,
  name: 'John',
  age: 23,
};

console.log('Task2 - summApply:', sumObjectValuesApply(object));
console.log('Task2 - summCall:',sumObjectValuesCall(object));