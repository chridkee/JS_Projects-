/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let str_arr = string.split('')
  return arrayConverter(str_arr)
}

function arrayConverter(array) {
  let counterObj = {}

  array.forEach((ele) => {
    if (!(ele in counterObj)){
      counterObj[ele] = 1
    }
    else{
      counterObj[ele] += 1
    }
  })
  return counterObj
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
