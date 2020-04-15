//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//First Solution =>  Time Complexity is O(n^2) && Space Complexity is O(1)

// var twoSum = function(nums, target) {
//   for (var k = 1; k < nums.length; k++) {
//     for (var i = 0; i < nums.length; i++) {
//       if (nums[i] + nums[k] === target) {
//         return [i, k];
//       }
//     }
//   }
// };

//Second Solution with O(n)

function twoSum(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const number = target - nums[i];
    if (number in hash) {
      return [hash[number], i];
    }
    hash[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 17));
