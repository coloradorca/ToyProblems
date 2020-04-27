//Leetcode => https://leetcode.com/problems/jump-game/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

var canJump = function (nums) {
  //set position number
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    //if the index is greater than the position, false
    if (i > position) {
      return false;
    }
    if (i + nums[i] >= nums.length - 1) {
      return true;
    }
    //reset the position to the next possible index
    position = Math.max(position, i + nums[i]);
  }
};

console.log(canJump([2, 3, 1, 1, 4]));
