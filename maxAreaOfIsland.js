// LEETCODE =>  https://leetcode.com/problems/max-area-of-island/

// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

//Depth First Search
let maxAreaOfIsland = (grid) => {
  //define a function that implements a Depth First Search (establish a count of 0 or 1 for each of its horizontal/vertical neighbors)
  let depthFirstSearch = (grid, x, y) => {
    //(base case) if cell is out of range or 0 return 0 and
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[x].length ||
      grid[x][y] === 0
    ) {
      return 0;
    }
    //sink the current island if it is a 1 to avoid multiple counts of it
    grid[x][y] = 0;
    //set it's current area to 1
    let area = 1;
    //check each one of its neighbors and add each of them to the area of current island
    area += depthFirstSearch(grid, x + 1, y);
    area += depthFirstSearch(grid, x - 1, y);
    area += depthFirstSearch(grid, x, y + 1);
    area += depthFirstSearch(grid, x, y - 1);
    return area;
  };
  let maxarea = 0;
  //touch each cell and obtain the max
  for (var rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (var colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      if (grid[rowIndex][colIndex] === 1) {
        //set and update the max area based on the DFS obtained for each cell
        maxarea = Math.max(maxarea, depthFirstSearch(grid, rowIndex, colIndex));
      }
    }
  }
  return maxarea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);

// console.log(
//   maxAreaOfIsland([
//     [1, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0],
//     [0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//   ]),
// );
