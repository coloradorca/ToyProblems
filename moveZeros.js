//Leetcode day 4

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function (nums) {
  let index = 0;
  //iterate over the array, replacing each number that isnt equal to zero in the same original order
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[index++] = nums[i];
    }
  }
  //this iteration starts after the last non-zero number, and adds zeros to the remainder of the array in place
  for (var i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

//my original approach involved using sort() which works in place, and putting all zeroes at the end.
// this method passed 18/21 test cases, but couldn't get it to pass all tests
