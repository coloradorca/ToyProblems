// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

//first solution

// var reverse = function(x) {
//   let string = String(x);
//   let arr = [];
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] !== '-' && string[i] !== '0') {
//       arr.push(Number(string[i]));
//     }
//   }
//   if (string[0] === '-') {
//     return string[0] + arr.reverse().join('');
//   }
//   return arr.reverse().join('');
// };

//a DRY solution

var reverse = function(x) {
  let r = parseInt(
    x
      .toString()
      .split('')
      .reverse()
      .join(''),
  );
  if (r < -2147483648 || r > 2147483647) return 0;
  return x < 0 ? -r : r;
};

console.log(reverse(123));
