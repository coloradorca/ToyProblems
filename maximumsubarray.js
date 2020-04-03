//Day 3 LeetCode 30 day challenge

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//Strategy

//create two variables, current max (currMax), and max up until given index (maxUntil)

//iterate over array

//get the current max by using Math.max between 0 and  the current max + each index
//get the maxUntil by adding the currMax to maxUntil

//return the highest sum

//Kadane's Algorithm

// (the commented code are edge cases which pass LeetCode's tests)

var maxSubArray = function(nums) {
  let allNegs = nums.every((n) => n < 0),
    currMax = 0,
    maxSum = Number.NEGATIVE_INFINITY;

  // if (nums.length === 1) return nums[0];
  if (nums.length === 0 || allNegs) return 0;
  // if (allNegs) {
  //   for (var k = 0; k < nums.length; k++) {
  //     if (nums[k] > nums[k + 1]) {
  //       maxSum = nums[k];
  //     }
  //   }
  // }
  for (var i = 0; i < nums.length; i++) {
    currMax += nums[i];
    maxSum = Math.max(currMax, maxSum);
    if (currMax < 0) {
      currMax = 0;
    }
  }
  return maxSum;
};

console.log(maxSubArray([-2, -1]));
