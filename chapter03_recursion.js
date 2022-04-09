// Without recursion
/*function isEven(number) {
  return number % 2 === 0 ? true : false
}*/

// Using recursion
function isEven(number) {
    // Evaluate positive numbers
    if (number >= 0) {
      if (number === 1) {
        return false
      } else if (number === 0) {
        return true
      } else {
        // For positive number subtract 2
        return isEven(number - 2)
      }
    } else {
      // For negative numbers add 2
      return isEven(number + 2)
    }
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??