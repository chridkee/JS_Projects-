/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

function vowelCount(str){
    let count = 0
    let vowels = 'aeiou'
    let chars = str.split('')

    chars.forEach((char) => {
        if (vowels.includes(char)){
            count += 1
        }
    })
    return count
};

let removeLastVowel = function(word) {
    let vowels = 'aeiou'
    if (vowels.includes(word[0]) && vowelCount(word) == 1){
        return word.substring(1, word.length)
    }
    for(let i = word.length - 1; i > 0; i--)
    if (vowels.includes(word[i])){
        return ( word.substring(0, i) + word.substring(i + 1, word.length) )
    }
};

let hipsterfy = function(sentence) {
    let sentarr = sentence.split(' ')
    let newarr = sentarr.map(word => removeLastVowel(word))
    return newarr.join(' ')
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
