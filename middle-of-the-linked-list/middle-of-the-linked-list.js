/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//solution with timecomplexit = space complexity = 
var middleNode = function(head) {
    let current = head;
    let result = head;
    let total = 0;
    while(current.next!==null) {
        total++;
        current = current.next
    }
    for(var i =0 ;i < Math.ceil(total/2); i++) {
        result = result.next;
    }
    return result;
};

// var middleNode = function(head) {
//     let slow = head;
//     let fast = head;
//     while(fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// }
//time complexity:O(N) space complexity O(1)