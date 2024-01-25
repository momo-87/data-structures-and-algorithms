const reverseString = (str) => {
  // type your code here
    // input: Hello world
  // output: dlrow olleh
  // split the string into an array
  // iterate through the array backwards
  // push the letters into a new array
  // join the array into a string
  // return the string

  let splitString = str.split("");
  let reversedArray = [];
  for (let i = splitString.length - 1; i >= 0; i--) {
    reversedArray.push(splitString[i]);
  }
  return reversedArray.join("");
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
