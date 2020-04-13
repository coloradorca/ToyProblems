//Leetcode Day 11 (https://leetcode.com/problems/last-stone-weight/)

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

// simple solution
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    stones.push(stones[0] - stones[1]);
    stones.splice(0, 2);
  }
  return stones[0];
};

//recursive solution
var lastStoneWeight = function (stones) {
  let length = stones.length;
  if (length === 1) return stones;
  stones.sort((a, b) => a - b);
  let last = stones[length - 1];
  let secondToLast = stones[length - 2];
  return lastStoneWeight(
    stones.slice(0, stones.length - 2).concat(last - secondToLast),
  );
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
