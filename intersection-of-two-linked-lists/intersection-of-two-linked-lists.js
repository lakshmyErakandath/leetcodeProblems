/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//pseudocode
//we have 2 linked list that can have different lengths
//find the length of both linked list by using a helper function getlen() and traversing through both the linked list using while loop
//find the difference between the length of 2 linked list
// if headA >  headB then we need to traverse through head A upto the diference.
//like if difference is 1 and headA is longer we will traverse through the headA 1 times so that both the linked list has the same lengthl
// after the while loop we will have another while loop to check if headA node equals to headB node if they are return either headA or headB
var getIntersectionNode = function(headA, headB) {
  var lenA = getLen(headA);
  var lenB = getLen(headB);
  let diff = Math.abs(lenA - lenB);

  if (lenA > lenB) {
    while (diff--) headA = headA.next;
  } else {    
    while (diff--) headB = headB.next;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

var getLen = function (head) {
  var len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};

