//LeetCode Problem:
//https://leetcode.com/problems/spiral-matrix/

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

var Inputtwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

var Input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function(matrix) {
  //edge case if the matrix is empty
  if (matrix.length === 0) return [];
  //create variables for matrix's start row index, start column index, end row index, end column index, and container
  let startRowIndex = 0,
    endRowIndex = matrix.length - 1,
    startColIndex = 0,
    endColIndex = matrix[0].length - 1,
    container = [];
  //traverse the matrix in a spiral fashion (across, down, reverse, up, repeat)
  //create a while loop to incorporate all elements and stop condition
  //will increment the indexes during the while loop to traverse directions
  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    //across
    for (var i = startColIndex; i <= endColIndex; i++) {
      container.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;
    //down
    for (var j = startRowIndex; j <= endRowIndex; j++) {
      container.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    // reverse
    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        container.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }
    //up
    if (startColIndex <= endColIndex) {
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        container.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }
  }
  return container;
};

console.log(spiralOrder([]));
