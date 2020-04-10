//Leetcode problem #10 of April 30day challenge (https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3292/)

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

//prototypical class(stack) instantiation

var MinStack = function () {
  var obj = Object.create(MinStack.prototype);
  obj.stack = [];
  return obj;
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
// console.log(obj);
obj.push(-2);
obj.push(0);
obj.push(-3);
// obj.getMin();
obj.pop();
obj.top();
// console.log(obj.top());
console.log(obj.getMin());
var param_3 = obj.top();
var param_4 = obj.getMin();
