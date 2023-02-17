function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    const odds = []
    for(let i=1; i < arr.length; i+=2){
        odds.push(arr[i])
    }
    return odds
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    return oddIndices(arr).reverse()
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    if (arr.length == 0){
        return []
    }
    const newarr = [2]
    for(let i=2; i < arr.length; i++){
       for(let num = 2; num <= i; num *= 2){
        if (num == i){
            newarr.push(arr[i])
        }
       }
    }
    return newarr
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    if (arr.length == 0){
        return []
    }
    const newarr = [(n - (n-2))]
    for(let i=n; i < arr.length; i++){
       for(let num = n; num <= i; num *= n){
        if (num == i){
            newarr.push(arr[i])
        }
       }
    }
    return newarr
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let mid = (arr.length / 2 )

    return arr.slice(0, Math.round(mid))
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here

    let mid = (arr.length / 2 )

    return arr.slice(Math.round(mid), (arr.length) )
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
