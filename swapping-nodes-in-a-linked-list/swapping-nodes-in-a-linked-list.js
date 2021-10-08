/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let result = [];
    let current = head;
    let resultHead = head;
    while(current) {
        result.push(current.val);
        current = current.next;
    }
    let temp = result[result.length-k];
    result[result.length-k] = result[k-1]
     result[k-1] = temp;
    
    for(var i = 0; i < result.length; i++) {
        if(result[i] !== resultHead.val) {
            resultHead.val = result[i];
        }
        resultHead = resultHead.next;
    }
    return head;
    
};