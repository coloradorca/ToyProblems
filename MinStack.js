//Leetcode problem #10 of April 30day challenge (https://leetcode.com/problems/min-stack/)

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

//both prototypical and pseudoclassical share the same methods and instantiation pattern

//prototypical class (stack) instantiation
//metrics from leetcode => Runtime: 148 ms (faster than 32%), Memory: 43.8 MB

// var MinStack = function () {
//   var obj = Object.create(MinStack.prototype);
//   obj.stack = [];
//   return obj;
// };

//pseudoclassical class instantiation
//metrics from leetcode => Runtime: 156 ms (faster than 28%), Memory: 44.1 MB ( less than 75%)

var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  let min = this.stack[0];
  for (let i = 0; i < this.stack.length; i++) {
    if (this.stack[i] < min) {
      min = this.stack[i];
    }
  }
  return min;
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.pop();
obj.top();
console.log(obj.top());
console.log(obj.getMin());

//functional class instantiation
//metrics from leetcode => Runtime: 164 ms (faster than 26%), Memory: 44.2 MB

// var MinStack = function () {
//   var obj = {};
//   obj.stack = [];

//   obj.push = function (x) {
//     this.stack.push(x);
//   };

//   obj.pop = function () {
//     this.stack.pop();
//   };

//   obj.top = function () {
//     return this.stack[this.stack.length - 1];
//   };

//   obj.getMin = function () {
//     let min = this.stack[0];
//     for (let i = 0; i < this.stack.length; i++) {
//       if (this.stack[i] < min) {
//         min = this.stack[i];
//       }
//     }
//     return min;
//   };

//   return obj;
// };

//functional pattern is instantiated without using the 'new' keyword
// var obj = MinStack();
