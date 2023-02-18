/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(arr, cb1, cb2) {
  debugger
  let newarr = []

  for(let i = 0; i < arr.length; i++){
    let both = cb1(arr[i]) == true && cb2(arr[i]) == true
    let one = cb1(arr[i]) == true || cb2(arr[i]) == true
    if (!both && one){
      newarr.push(arr[i])
    }
  }
  return newarr
};


// let isEven = function(n) {
//   return n % 2 === 0;
// };

// let isPositive = function(n) {
//   return n > 0;
// };

// console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// // [ -2, 1, 3 ]




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
