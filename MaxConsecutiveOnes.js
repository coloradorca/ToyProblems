//Leetcode

// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

//    Hide Hint #1
// You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window. How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  if (nums.length === 0) return 0;
  let count = 0,
    temp = -1;

  for (var i = 0; i < nums.length; i++) {
    //check the start of the window and increment counter
    if (nums[i] === 1) {
      count++;
    }
    //check the end of the window
    //set the temp counter => if the current count is greater than the temp counter, set the temp counter to the current count, else keep it as the previous largest counter
    if (nums[i] === 0 || nums[i + 1] === undefined) {
      temp = count > temp ? count : temp;
      count = 0;
    }
  }
  return Math.max(temp, count);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1]));
