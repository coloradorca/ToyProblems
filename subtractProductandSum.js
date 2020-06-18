//leetcode => https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.


// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

//using a strting and a for loop
// const subtractProductAndSum = (n) => {
//   let string = String(n), product = 1, sum = 0;
//   for(var i = 0; i < string.length; i ++){
//     product *= Number(string[i]);
//     sum += Number(string[i]);
//   }
//   return product - sum;
// }

//using an array and map
const subtractProductAndSum = (n, product = 1, sum = 0) => {
  Array.from(String(n)).map(e => {
    product *= Number(e);
    sum += Number(e);
  } )
  return product - sum;
}

//using an array and reduce
const subtractProductAndSum = (n) => {
  let product = Array.from(String(n)).reduce((a,b) =>  a *= b, 1)
  let sum = Array.from(String(n)).reduce((a,b) => a += Number(b), 0)
  return product -sum;
}

console.log(subtractProductAndSum(234))