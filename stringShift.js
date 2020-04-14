//leet code day 14 ()

// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift).
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation:
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

//strategy:

// .split() the string to manipulate it, .join('') at the end
//count up the totalshifts of left or right operations
//if the number is negative, perform the right shift operation
//if the number positive, perfrom the left shift operation
//use .unshift(), .pus() and .splice() to move elements to in the array

//create an array from the string and iterate over it

//this algorithm tallys up all of the operations, and performs them on the input string once the tally is completed
var stringShift = function (s, shift) {
  //edge cases
  if (s.length <= 1 || s.length > 100) return 'string length exceeded';
  if (shift.length <= 1 || shift.length > 100) return 'shift length exceeded';
  let array = s.split('');
  let shiftright = 0;
  let shiftleft = 0;
  //iterate over shift operations array
  for (var k = 0; k < shift.length; k++) {
    //add up all the left shifts
    if (shift[k][0] === 0) {
      shiftleft += shift[k][1];
    }
    //add up all the right shifts
    if (shift[k][0] === 1) {
      shiftright += shift[k][1];
    }
  }
  //sum of the total of operations needed
  let totalshifts = shiftleft - shiftright;

  //if the number is negative, perform the right shift operation
  if (totalshifts < 0) {
    while (totalshifts < 0) {
      console.log('move left');
      array.unshift(array[array.length - 1]);
      array.splice(array.length - 1);
      totalshifts++;
    }
  }
  //if the number is positive, perform the left shift operatoin
  if (totalshifts > 0) {
    while (totalshifts > 0) {
      console.log('move right');
      array.push(array[0]);
      array.splice(0, 1);
      totalshifts--;
    }
  }
  return array.join('');
};

//this algorithm modifies the first argument in place
//aside from 1 edge case on the leetcode of too many operations, this function works,

// var stringShift = function (s, shift) {
//   if (s.length <= 1 || s.length > 100) return 'string length exceeded';
//   if (shift.length <= 1 || shift.length > 100) return 'shift length exceeded';
//   let array = s.split('');
//   let indexright = 0;
//   let indexleft = 0;
//   //iterate over shift operations array
//   for (var k = 0; k < shift.length; k++) {
//     //if it is a shift left operation
//     if (shift[k][0] === 0) {
//       //perform the operation the number of times defined in the second integer in the array
//       while (indexleft < shift[k][1]) {
//         array.push(array[0]);
//         array.splice(0, 1);
//         console.log('shift left array', array);
//         indexleft++;
//       }
//       indexleft = 0;
//     }
//     //if it is a shift right operation
//     if (shift[k][0] === 1) {
//       //perform the operation the number of times defined in the second integer in the array
//       while (indexright < shift[k][1]) {
//         array.unshift(array[array.length - 1]);
//         array.splice(array.length - 1);
//         console.log('shift right array', array);
//         indexright++;
//       }
//       indexright = 0;
//     }
//   }

//   return array.join('');
// };

console.log(
  stringShift('abc', [
    [0, 1],
    [1, 2],
  ]),
);
