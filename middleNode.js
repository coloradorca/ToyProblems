//LeetCode day 8 (https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3290/)

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

// Note:

// The number of nodes in the given list will be between 1 and 100.

//strategy
//establish two pointers
//while the fastpointer is not null & the fastpointer next is not null
//increment the fast pointer two nodes ahead of the slow pointer
//increment the slow pointer one node at a time
//when the fast pointer becomes null, the slow pointer is at the middle of the list

var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer;
};
console.log(middleNode([1, 2, 3, 4, 5]));

/*

visualization of iterations

fp = fast pointer
sp = slow pointer
Start:
sp
[1  2  3  4  5]
fp

First iteration:
    sp
[1  2  3  4  5]
       fp

Second iteration:
       sp
[1  2  3  4  5]
             fp

 */
