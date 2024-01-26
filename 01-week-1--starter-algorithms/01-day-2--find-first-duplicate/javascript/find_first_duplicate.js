function findFirstDuplicate(arr) {
  // type your code here
  // let set = new Set();
  //  set.add(arr[0]);
  // for i = 1 to arr.length - 1
  //  if set.has(arr[i]) return arr[i]
  // set.add(arr[i]);
  // end
  // return -1

  let set = new Set();
  set.add(arr[0]);

  for(let i = 1; i < arr.length; i++) {
    if(set.has(arr[i])) {
      return arr[i];
    } 
    set.add(arr[i]);
  }

  return -1;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
