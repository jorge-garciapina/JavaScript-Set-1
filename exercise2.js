// Define limitFunc function with fn and limit arguments
function limitFunc(fn, limit) {
  // Initialize counter variable
  let count = 0;
  // Define limited function that accepts any number of arguments
  function limited(...args) {
    // Throw error if counter variable exceeds limit
    if (count >= limit) {
      throw new Error(`Function can only be called ${limit} times`);
    }
    // Increment counter and call fn with arguments
    count++;
    return fn(...args);
  }
  // Return limited function
  return limited;
}

// Example usage
// Define add function that returns sum of two arguments
const add = (a, b) => a + b;
// Create limitedAdd function with limit of 2
const limitedAdd = limitFunc(add, 2);
// Call limitedAdd function with arguments
console.log(limitedAdd(1, 2)); // Output: 3
console.log(limitedAdd(3, 4)); // Output: 7
// Call limitedAdd function with more arguments, should throw error
console.log(limitedAdd(5, 6)); // Output: Error: Function can only be called 2 times
