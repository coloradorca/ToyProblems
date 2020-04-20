/*
Leetcode => https://leetcode.com/problems/search-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

// O(log N) via binary search

var search = function (nums, target) {
  //initialize range
  let end = nums.length - 1,
    start = 0;
  //while the range exists
  while (start <= end) {
    //set a midpoint
    let mid = Math.floor((end + start) / 2);
    //if the target is the midpoint, return
    if (nums[mid] === target) return mid;
    //otherwise, construct a new range
    //if no pivot between start and middle
    if (nums[start] <= nums[mid]) {
      // check if target is between start and middle
      if (nums[start] <= target && target < nums[mid]) {
        //if so, set end to right before middle
        end = mid - 1;
        //otherwise, search between middle and end
      } else {
        start = mid + 1;
      }
      //if there is a pivot between start and middle
    } else {
      //check if target is between middle and end
      if (nums[mid] < target && target <= nums[end]) {
        //if so, set start right after middle
        start = mid + 1;
        //otherwise search between start and middle
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// O(N) runtime

// var search = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };
