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
//pseudocode
// solution-1
// cretae a variable called result that refernce to head
// create a counter 
// traverse through the linked list to find the length of the linkedlist
// increment the counter 
// find the midpoint of it and traverse throught the linkedlist again upto the midpoint 
// return the result

// solution-2
// usinf 2 pointer
// create 2 variables slow and fast that point to head initially.
// traverse throught the linkedlist until fast and fast.next!==null
// while traversing slow moves 1 point to the right and fast moves 2 point to the right
// once the fast and fast.next is null
// return the slow.


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
