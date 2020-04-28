/*
Leetcode => https://leetcode.com/problems/first-unique-character-in-a-string/

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

var firstUniqChar = function (s) {
  let hash = {};
  if (s.length === 0) return -1;
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = [1, i];
    } else if (hash[s[i]]) {
      hash[s[i]][0] += 1;
    }
  }
  for (key in hash) {
    if (hash[key][0] === 1) {
      return hash[key][1];
    }
  }
  return -1;
};

console.log(firstUniqChar('loveleetcode'));
