function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i]
    // console.log(num1)
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j]
      // console.log(num2)
      let sum = num1 + num2
      if (sum === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  use a for loop to iterate through all the numbers 
  use a another for loop to iterate through the adjacent numbers
  add the two items and test
*/

/*
  Add written explanation of your solution here
  Iterate through all the numbers using a loop and 
  adding them up with each other until the number is found.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


