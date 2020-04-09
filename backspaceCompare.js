//Leetcode challenge day 9 (https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/529/week-2/3291/)

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

//strategy

//use the Stack Data Structure will be used
//iterate thru the two inputted strings
//push any element that isnt a # to the stack
// if the element is a #, pop it off the stack

const backspaceCompare = (S, T) => {
  let Sstack = [];
  let Tstack = [];

  for (let i = 0; i < S.length; i++) {
    //push all elements that aren't '#' to the stack
    if (S[i] != '#') {
      Sstack.push(S[i]);
    }
    //pop the last element off of the stack if the current element is a '#'
    else {
      Sstack.pop();
    }
  }
  //do the same for the second argument
  for (let j = 0; j < T.length; j++) {
    if (T[j] != '#') {
      Tstack.push(T[j]);
    } else {
      Tstack.pop();
    }
  }
  //join the two stacks into strings and compare them
  return Sstack.join() === Tstack.join();
};

console.log(backspaceCompare('bxj##tw', 'bxo#j##tw'));
