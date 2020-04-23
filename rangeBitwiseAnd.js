//Leetcode day 23 => https://leetcode.com/problems/bitwise-and-of-numbers-range/

// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4
// Example 2:

// Input: [0,1]
// Output: 0

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let c = 0;
  let ret = 0;
  for (let i = 0; i < 32; ++i) {
    const t = 1 << i;
    if (m & t) {
      if (m + c + 1 > n) {
        ret |= t;
      }
    } else {
      c |= t;
    }
  }
  return ret;
};

console.log(rangeBitwiseAnd([5, 7]));
