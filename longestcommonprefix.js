// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  var result = '';
  var k = 0;
  while (true) {
    for (var i = 0; i < strs.length; i++) {
      if (!result[k]) {
        result += strs[i][k];
      }
      if (strs[i][k] !== result[k]) {
        return result.slice(0, k);
      }
      if (k === strs[i].length) {
        break;
      }
    }
    k++;
  }
  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flower']));
