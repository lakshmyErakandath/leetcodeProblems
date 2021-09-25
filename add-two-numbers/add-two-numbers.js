/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // create a dummyhead for new output linkedList
    let dummyHead = new ListNode(0);
    //p1 points to l1 and p2 points to l2
    let p1 = l1;
    let p2 = l2;
    //create a variable for carry
    let carry = 0;
    current = dummyHead;
    
    while(p1 !== null || p2 !== null) {
        let x = p1 ? p1.val : 0;
        let y = p2 ? p2.val : 0;
        let sum = x + y + carry;
        
        carry = Math.floor(sum/10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if(p1 !== null) {
            p1 = p1.next;
        } 
        
        if(p2 !== null) {
            p2 = p2.next;
        }
        
    }
    if(carry > 0) {
        current.next = new ListNode(1);
    }
    return dummyHead.next;
};