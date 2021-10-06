/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    let current = head;
    head = null;
    let prev = null;
    while(current!==null) {
        if(current.val === val) {
            if (prev != null) {
                prev.next = current.next;
            }
            current = current.next
        }else {
            if (head == null) {
                head = current;
            }
            prev = current;
            current = current.next;
        }
        
    }
    return head;
};