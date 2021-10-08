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
// pseudocode
//traverse through the linked list until null and push the value to the linkedListArray
//reverse the linkedList array
//iterate through the reverse Array and compare each value in the array with the linkedlist
//move head to head.next
//if they are not same they are not palindrome so return false
//else return true
//Time complexity :O(N);
//Space complexity: 0(N);
// var isPalindrome = function(head) {
//     let linkedListArray = [];
//     let current = head;
//     while(current) {
//         linkedListArray.push(current.val);
//         current = current.next;
//     }
//     let reverse = linkedListArray.reverse();
//     for(var i =0; i < reverse.length; i++) {
//         if(reverse[i] !== head.val) {
//             return false;
//         }
//         head = head.next;
//     }
//     return true;
// };


//solution -2
//find the midpoint of the linkedlist 
//then reverse the second half of the linked list
//then compare the head and reversed second half 
//if they are equal return true else false
var isPalindrome = function (head) {
    // Pass empty or single-item linked lists
    if (!head || !head.next) return true;

    // Traverse the linked list in order to find the mid-point (slow)
    let slow = head,
        fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    slow.next = reverseLinkedList(slow.next);
    slow = slow.next;

    // Compare the original linked list with the reversed second half
    while (slow) {
        if (head.val !== slow.val) {
            // If a mismatch is detected, break out
            return false;
        }
        head = head.next;
        slow = slow.next;
    }

    return true;
};

var reverseLinkedList = function (head) {
    let nextNode = null;
    let previousNode = null;
    while (head) {
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    return previousNode;
};
//time complexity:O(N)
//space complexity:O(1)
