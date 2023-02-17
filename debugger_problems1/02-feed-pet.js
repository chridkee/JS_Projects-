/*

Fix the `feedPet` function. `feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.

*/

let printAll = function(arr){
  str = ""
  if (arr.length == 1){
    return arr[0]
  }
  else {
    for(let i = 0; i < arr.length; i++){
      if(i != arr.length - 1){
        str += arr[i] + ", "
      }
      else{
        str+= arr[i]
      }
    }
  }
  return str
}

function feedPet(name) {
  debugger
  const foods = [];
  return (food) => {
    foods.push(food)
    return "Fed " + name + " " + printAll(foods) + ".";
  }
}

const feedHydra = feedPet('Hydra');

console.log(feedHydra('bones')); // Fed Hyrda bones.
console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.

const feedHippogriff = feedPet('Hippogriff');

console.log(feedHippogriff('worms')); // Fed Hyrda worms.
console.log(feedHippogriff('crickets')); // Fed Hyrda worms, crickets.
console.log(feedHippogriff('chicken')); // Fed Hyrda worms, crickets, chicken.
