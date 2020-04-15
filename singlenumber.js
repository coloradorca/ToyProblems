//Leetcode 30 day coding challenge ( will try and keep up with this challenge for the month of April)

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//both time and space complexity are O(n)

var singleNumber = function (nums) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
  }
  for (key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
};

console.log(singleNumber([5, 5, 1, 6]));
