const { performance } = require('perf_hooks');

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

//  In an attempt to see how the performance of the native .split() and .join() compare against the
//  standard for loop, I'm incorporating the performance.now() feature.  The results I'm see when
//  running the different functions on my local machine are too inconsistent to make conclusions
//  about which one is faster.  It seems as though its neglible at such a small scale.

var t0 = performance.now();

var defangIPaddr = function(address) {
  var result = '';
  for (var i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      result += '[';
      result += '.';
      result += ']';
    } else {
      result += address[i];
    }
  }
  return result;
};
// var defangIPaddr = function(address) {
//   let str = '';
//   for (let i = 0; i < address.length; i++) {
//     str += address[i] !== '.' ? address[i] : '[.]';
//   }
//   return str;
// };

// var defangIPaddr = function(address) {
//   return address.split('.').join('[.]');
// };

var t1 = performance.now();

// console.log('Performance of given function is' + (t1 - t0) + ' milliseconds.');

console.log(defangIPaddr('1.1.1.1'));
