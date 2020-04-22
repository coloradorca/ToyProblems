/*
Leetcode day 22 => https://leetcode.com/problems/subarray-sum-equals-k/

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

//Optimized Solution O(n) using a Map()
var subarraySum = (nums, k) => {
  let sum = 0;
  let count = 0;
  let hashMap = new Map();
  hashMap.set(0, 1);

  for (let num of nums) {
    sum += num;
    if (hashMap.has(sum - k)) {
      count += hashMap.get(sum - k);
    }
    hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
  }
  return count;
};

//Optimized Solution O(n) using an object as a hashMap
// var subarraySum = function (nums, k) {
//   let hashMap = { 0: 1 };
//   let count = 0;
//   let sum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (hashMap[sum - k]) {
//       count += hashMap[sum - k];
//     }
//     hashMap[sum] = (hashMap[sum] || 0) + 1;
//   }

//   return count;
// };

// Brute force solution o(n^2)
var subarraySum = function (nums, k) {
  // let counter = 0;
  // for (var i = 0; i < nums.length; i++) {
  //   let sum = 0;
  //   for (var j = i; j < nums.length; j++) {
  //     sum += nums[j];
  //     if (sum === k) {
  //       counter++;
  //     }
  //   }
  // }
  // return counter;
};

console.log(subarraySum([1, 1, 1], 2));
