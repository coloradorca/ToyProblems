/*
Leetcode day 15 Product of Array Except Self (https://leetcode.com/problems/product-of-array-except-self/)


Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/

//two pass solution
//decrease in time & space complexity (runtime 72 ms (beats 96%), 42.4 MB memory)

var productExceptSelf = function (nums) {
  let result = [];
  let tempLeft = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = tempLeft;
    tempLeft *= nums[i];
  }
  let tempSum = 1;
  for (let k = nums.length - 1; k >= 0; k--) {
    result[k] = result[k] * tempSum;
    tempSum = tempSum * nums[k];
  }

  return result;
};

//strategy

//initial solution 3 passes (runtime 280 MS (beats 14%), memory 44.7MB)

// var productExceptSelf = function (nums) {
// let productsToLeft = [];
// let productsToRight = [];
// let tempLeft = 1;
// let tempRight = 1;
// let result = [];
// for (let i = 0; i < nums.length; i++) {
//   productsToLeft.push(tempLeft);
//   tempLeft *= nums[i];
// }
// for (let k = nums.length - 1; k >= 0; k--) {
//   productsToRight.unshift(tempRight);
//   tempRight *= nums[k];
// }
// for (let j = 0; j < nums.length; j++) {
//   result[j] = productsToLeft[j] * productsToRight[j];
// }
// return result;
// };

console.log(productExceptSelf([1, 2, 3, 4]));
