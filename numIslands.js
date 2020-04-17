/*
LeetCode day 16
https://leetcode.com/problems/number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3


Graph Algorithm- (depth first search)

strategy:

use recursion check each place on the grid for left, right, down, above neighbors, and 'sink' each island when we reach it


*/

var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;
  let islands = 0;

  for (var i = 0; i < grid.length; i++) {
    for (var k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === '1') {
        islands += dfs(grid, i, k);
      }
    }
  }

  let dfs = (grid, i, k) => {
    //out of bounds of matrix or current index is 0 (stop traversing)
    if (
      i < 0 ||
      i >= grid.length ||
      k < 0 ||
      k >= grid[i].length ||
      grid[i][k] === '0'
    ) {
      return 0;
    }
    //sink the island
    grid[i][k] = '0';
    //down index
    dfs(grid, i + 1, k);
    // up index
    dfs(grid, i - 1, k);
    //right neighbor
    dfs(grid, i, k + 1);
    //left neighbor
    dfs(grid, i, k - 1);
    //account for original seen island
    return 1;
  };
};

console.log(numIslands(11110
  11010
  11000
  00000));
