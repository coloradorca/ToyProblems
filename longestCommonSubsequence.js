/*
Leetcode April 30 day challenge,  day 29 => https://leetcode.com/problems/longest-common-subsequence/


Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

//strategy

//use Dynamic Programming to create a table
//fill the table with the length of the common letters
//adding the max value from either left (on same row) or above (same column)
// return the last item in the table

var longestCommonSubsequence = function (text1, text2) {
  if (text1.length === 0 || text2.length === 0) return 0;
  let dp = [];
  //initialize table
  for (var i = 0; i <= text2.length; i++) {
    dp.push([]);
  }
  //fill first row with zeros
  for (var j = 0; j <= text1.length; j++) {
    dp[0][j] = 0;
  }
  //fill first column with zeros
  for (let i = 0; i <= text2.length; i++) {
    dp[i][0] = 0;
  }
  // fill the rest of the table
  for (let i = 0; i < text2.length; i++) {
    for (let j = 0; j < text1.length; j++) {
      const n = i + 1;
      const m = j + 1;
      if (text1[j] === text2[i]) {
        dp[n][m] = dp[n - 1][m - 1] + 1;
      } else {
        dp[n][m] = Math.max(dp[n - 1][m], dp[n][m - 1]);
      }
    }
  }
  //return last item in the table
  return dp[text2.length][text1.length];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
