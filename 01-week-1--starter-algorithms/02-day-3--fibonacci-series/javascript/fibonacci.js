function fibonacci(num) {
  // type your code here
  // fibo = [0, 1]
  // loop i from 2 to num
  //  fibo[i] << fibo[i-2] + fibo[i-1]
  // if num = 0 return 0
  // if num = 1 return 1
  // return fibo[num]

  const fibo = [0, 1];

  if(num === 0) {
    return 0;
  } else if(num === 1) {
    return 1;
  } else {
    for(let i = 2; i <= num; i++ ) {
      fibo[i] = fibo[i-2] + fibo[i-1];
    }

    return fibo[num];
  }
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
