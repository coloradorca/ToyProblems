//Leetcode => https://leetcode.com/problems/merge-sorted-array/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  let pointerOne = m - 1;
  let pointerTwo = n - 1;
  let resultPointer = n + m - 1;

  while (pointerOne >= 0 || pointerTwo >= 0) {
    if (pointerTwo < 0 || nums1[pointerOne] >= nums2[pointerTwo]) {
      nums1[resultPointer--] = nums1[pointerOne--];
    } else {
      nums1[resultPointer--] = nums2[pointerTwo--];
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
