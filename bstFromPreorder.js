/*
LeetCode => https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Note:

1 <= preorder.length <= 100
The values of preorder are distinct.
*/

//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

var bstFromPreorder = function (preorder) {
  //edge cases
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);

  //create a recursive function to add each element in array to a tree
  const addToBst = (root, value) => {
    //check if the value is larger root's value
    if (root.val > value) {
      //no root left, create a node and add this node to the root
      if (!root.left) {
        root.left = new TreeNode(value);
        //if there is a left node, traverse down the tree to the left side
      } else {
        addToBst(root.left, value);
      }
      //otherwise, the inputted node's value is greater than the root value
    } else {
      //no right node, create one and set it to this root
      if (!root.right) {
        root.right = new TreeNode(value);
        //otherwise, traverse the tree down the right side
      } else {
        addToBst(root.right, value);
      }
    }
  };
  //build the start of a tree with the first item in the input array
  let result = new TreeNode(preorder[0]);
  // iterate over each consecutive value in the preorder, and recursively add it to the Result Tree
  for (var i = 1; i < preorder.length; i++) {
    addToBst(result, preorder[i]);
  }
  return result;
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
