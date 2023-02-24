/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

let flatten = function(arr){
  debugger
  let finalarr;
  if (arr.length == 0){
    return []
  }
  else {
    let count = 0
    let newarr = []

    arr.forEach((ele) => {
      if (Array.isArray(ele) == false){
        newarr.push(ele)
      }
      else {
        ele.forEach(subele => newarr.push(subele))
        count += 1
        }
    })
    if (count == 0){
      finalarr = newarr.slice()
    }
    else {
      flatten(newarr)
    }
  }
  return finalarr
}

flatten([1, [2, [3]]]); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
