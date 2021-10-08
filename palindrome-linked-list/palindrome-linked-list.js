/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let linkedListArray = [];
    let current = head;
    while(current) {
        linkedListArray.push(current.val);
        current = current.next;
    }
    let reverse = linkedListArray.reverse();
    for(var i =0; i < reverse.length; i++) {
        if(reverse[i] !== head.val) {
            return false;
        }
        head = head.next;
    }
    return true;
};