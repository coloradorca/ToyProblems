//Leetcod April 30 day challenge day 2

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example:

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

//strategy

//recursively call the function until the added sum of the each square number equals 1
//base case => the sum = 1
//edge case? =>  ( n = 7 )
//maximum stack size?

//recursive case => square each digit and add the sum

var isHappy = function(n) {
  //split the number into an arrary of strings
  var digits = n.toString().split('');
  //instantiate a sum variable
  var sum = 0;
  //iterate over array of each digit of given parameter
  for (var i = 0; i < digits.length; i++) {
    //the sum is accumulated by each digit sqaured (although the array's values are strings, JS' type coercion allows us to treat them as numbers)
    sum += digits[i] * digits[i];
  }
  // return true if it is a happy number or input is 7(edge case for number < 10)
  if (sum === 1 || n === 7) {
    return true;
  }
  //if number is one digit
  if (n < 10) {
    return false;
  }
  //otherwise recursively call the function
  else {
    return isHappy(sum);
  }
};

//for running tests in node
console.log(isHappy(49));
