//Leetcode =>

// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

const isAlienSorted = (words, order) => {
  //instantiate a map
  let alphabet = new Map();
  //loop over alphabet and set each letter to a number for sorting later
  for (var i = 0; i < order.length; i++) {
    alphabet.set(order[i], i);
  }
  //iterate over each word
  for (var j = 0; j < words.length - 1; j++) {
    //create variables to compare each word
    let wordOne = words[j],
      wordTwo = words[j + 1];
    let count = 0;
    //while one word is longer than the other
    while (count < wordOne.length || count < wordTwo.length) {
      //if the second word is longer than the first, return false
      if (count === wordTwo.length) {
        return false;
        //otherwise if the first word is out of characters or the characters in the first word are are sorted, break the loop
      } else if (
        count === wordOne.length ||
        alphabet.get(wordOne[count]) < alphabet.get(words[j + 1][count])
      ) {
        break;
      }
      //return false if the index of the character in the first word is further along in the alphabet
      if (alphabet.get(wordOne[count]) > alphabet.get(words[j + 1][count])) {
        return false;
      }
      count++;
    }
  }
  return true;
};

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'));

//faster runtime using .indexOf() instead of creating a map to check the index of the alphabet
// const isAlienSorted = (words, order) => {
//   for (var j = 0; j < words.length - 1; j++) {
//     let wordOne = words[j],
//       wordTwo = words[j + 1];
//     let count = 0;
//     while (count < wordOne.length || count < wordTwo.length) {
//       if (count === wordTwo.length) {
//         return false;
//       } else if (
//         count === wordOne.length ||
//         order.indexOf(wordOne[count]) < order.indexOf(wordTwo[count])
//       ) {
//         break;
//       }
//       if (order.indexOf(wordOne[count]) < order.indexOf(wordTwo[count])) {
//         return false;
//       }
//       count++;
//     }
//   }
//   return true;
// };
