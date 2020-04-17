//LeetCode Day 17  (https://leetcode.com/problems/valid-parenthesis-string/)

// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].

//strategy
//make a stack that pushes and pops dependant on opening or closing parens
//keep track of the stars, left and right parens
// if there are more right parens than stars or left, return false

const checkValidString = (s) => {
  let left = 0,
    right = 0,
    stars = 0,
    stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
      stack.push('(');
    } else if (s[i] === ')') {
      right++;
      //if there are more right parens than left or stars at any point, return false
      if (right > stars + left) {
        return false;
      }
      stack.pop();
    } else if (s[i] === '*') {
      stars++;
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(checkValidString('(*)))()'));
