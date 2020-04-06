//Leetcode day 6

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

//instantiate and empty object and result array
//set up an obj that has key of the index of the word and the value as an array of each letter in alphabetical order
//compare each value (array of letters in alphabetical order)
//if they are the same, push that index of the inputted array to the return array

var groupAnagrams = function (strs) {
  let hash = {},
    result = [];

  strs.forEach((words) => {
    let letters = words.split('').sort();
    hash[letters] ? hash[letters].push(words) : (hash[letters] = [words]);
  });
  for (keys in hash) {
    result.push(hash[keys]);
  }
  return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
