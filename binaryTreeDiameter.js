//LeetCode day 11 ( https://leetcode.com/problems/diameter-of-binary-tree/ )

// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/*
 * @param {TreeNode} root
 * @return {number}
 */

//Depth First search Algorithm

//strategy
// recursive the Binary Tree
//set a value to ever
// start from the root, find the largest amount of edges off the root's left and right nodes, find the max

//if the child node doesn't have any left or right values, it is the last child

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  function height(child) {
    //base case if there aren't any children
    if (!child) {
      return 0;
    }
    //recursively search the tree to get the left and right depth
    let leftNode = height(child.left);
    let rightNode = height(child.right);

    //diameter is serving as a counter, and is updated every time a recursive call is made
    diameter = Math.max(diameter, leftNode + rightNode);

    return Math.max(leftNode, rightNode) + 1;
  }
  height(root);
  return diameter;
};
