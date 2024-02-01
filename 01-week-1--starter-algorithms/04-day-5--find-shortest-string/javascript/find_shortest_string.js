function findShortestString(arr) {
  // type your code here
  // let shortestString is the first item from arr
  // loop the array and compare the length of each item with the length of shortestString
  //  if arr[i].length < shortestString.length, shortestString = arr[i]
  // return shortestString

  let shortestString = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i].length < shortestString.length) shortestString = arr[i];
  }

  return shortestString;


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
