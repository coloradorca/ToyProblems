//Leetcode => https://leetcode.com/problems/island-perimeter/

// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:

// Input:
let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

// Output: 16

//Graph data Structure use a BFS:

let islandPerimeter = function (grid) {
  if (grid.length === 0) return 0;
  //function to check for each cell's neighbors and return the perimeter based on neighboring cells
  let neighbors = function (i, k) {
    //initialize each cell with a perimeter of 4 and subtract one for each neighboring land cell
    let sum = 4;
    //(make sure neighbor is in range && neighbor)
    //down neighbor
    if (i + 1 < grid.length && grid[i + 1][k] === 1) {
      sum--;
    }
    //up neighbor
    if (i - 1 >= 0 && grid[i - 1][k] === 1) {
      sum--;
    }
    //right neighbor
    if (k + 1 < grid[0].length && grid[i][k + 1] === 1) {
      sum--;
    }
    //left neighbor
    if (k - 1 >= 0 && grid[i][k - 1] === 1) {
      sum--;
    }
    return sum;
  };

  let perimeter = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === 1) {
        perimeter += neighbors(i, k);
      }
    }
  }
  return perimeter;
};

console.log(islandPerimeter([[0, 1, 1]]));
