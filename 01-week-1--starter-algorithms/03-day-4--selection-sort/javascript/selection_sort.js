function selectionSort(arr) {
  // type your code here
  // instanciate an empty array to store the minimum at each step, let call it sortedArr
  // while arr.length > 0
  // find the minimum from arr, push it to sortedArr
  // apply a filter to remove the minimum
  // if a minimum value is repaeted n time at a step, then we have:
  // n = arr.length - filteredArray.length a the given step, then we have to push the
  // repeated value n times in the sorted array.
  // return sortedArr

  const sortedArr = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const n = arr.length - arr.filter(elt => elt > min).length;
    
    for(let i = 1; i <= n; i++){
      sortedArr.push(min);
    }
    
    arr = arr.filter(elt => elt > min);
  }

  return sortedArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
