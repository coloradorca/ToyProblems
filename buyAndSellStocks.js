// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


// var maxProfit = function (prices) {
//   let  profit = 0, maxPrice = prices[0], minPrice = prices[0];
//   for (var i = 0; i < prices.length; i++) {
//     if(prices[i] < minPrice){
//       minPrice = prices[i]
//       maxPrice = 0;
//     }
//     if(prices[i] > maxPrice){
//       maxPrice = prices[i]
//     }
//     profit = Math.max(maxPrice - minPrice, profit)
//   }
//   return prices.length ? profit : 0;
// };

//more concise code
var maxProfit = function (prices) {
  let  maximumUntil = 0, currentMax = 0
  for (var i = 1; i < prices.length; i++) {
    currentMax = Math.max(0, currentMax += prices[i] - prices[ i - 1] )
    maximumUntil = Math.max( currentMax, maximumUntil)
  }
  return maximumUntil;
};

console.log(maxProfit([2,4,1]));
