// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.



// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


//Use JS built in reverse method
// var reverseString = function(s) {
//     return s.reverse()
// };

//Use recursion  Time & Space Complexity => O(N)
// var reverseString = function(s) {
//  if(s.length === 0){
//    return s
//  }
//  return reverseString(s.slice(1)).concat(s[0])
// //  return [s.pop()].concat(reverseString(s));
// };

//Swap elements in place using extra variable Time Complexity => O(N), Space complexity => O(1)
var reverseString = function(s) {
  for(let i =0, j = s.length -1; i < j; i++, j--){
    let temp = s[i]
    s[i] = s[j];
    s[j] = temp
  }
  return s
};


console.log(reverseString(["h","e","l","l","o"]))