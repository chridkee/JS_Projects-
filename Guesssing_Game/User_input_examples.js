// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
// The details of what createInterface does aren't super-duper important, but here is the short story:
// it allows us to read and print information from the terminal.
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // ask the user a question
// rl.question("What's up, doc? ", answer => {
//   // print their response
//   console.log("you responded: " + answer);
//   // close the interface
//   rl.close();
//   console.log("DONE!");
// });



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
