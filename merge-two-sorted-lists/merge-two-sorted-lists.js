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
var mergeTwoLists = function(l1, l2) {
    //if either of list doesnt exist return the other list
    if(!l1) return l2;
    if(!l2) return l1;
    //create a result dummy linked list and start with -1 or any other value
    let dummy = new ListNode(-1);
    //create a head variable so that we can return it at the end
    let head = dummy;
    //loop through both the list until they become null
    while(l1!== null && l2 !== null) {
        if(l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else{
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    if(l1 !== null) {
        dummy.next = l1;
    }else {
        dummy.next = l2;
    }
    return head.next;
};