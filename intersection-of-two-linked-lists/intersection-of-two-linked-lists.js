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
// var getIntersectionNode = function(headA, headB) {
//     let currA = headA;
//     let currB = headB;
//     let resA = headA;
//     let resB = headB;
//     let lenA=0;
//     let lenB=0;
//     while(currA.next){
//         lenA++
//         currA = currA.next;
//     }
//     while(currB.next) {
//         lenB++;
//         currB = currB.next;
//     }
//     let diff = Math.abs(lenA-lenB);
//     if(lenA > lenB) {
//         for(var i = 0; i < diff; i++) {
//         resA = resA.next;
//         }
//     }else {
//      for(var i = 0; i < diff; i++) {
//         resB = resB.next;
//     } 
//     }
   
//     while(resA && resB) {
//             // if(resA.val === resB.val) {
//             //     if(resA.next===null && resB.next === null) {
//             // return resA;
//             // }
//             // }
//      if(resA.next === resB.next) {
//             return resB.next
//         }else {
//             resA = resA.next;
//             resB = resB.next;
//         }
//     }
//     return null;
    
// };

// var getIntersectionNode = function(headA, headB) {
//   var lenA = getLen(headA);
//   var lenB = getLen(headB);
//   let diff = Math.abs(lenA - lenB);

//   if (lenA > lenB) {
//     while (diff--) headA = headA.next;
//   } else {
//     while (diff--) headB = headB.next;
//   }

//   while (headA !== headB) {
//     headA = headA.next;
//     headB = headB.next;
//   }

//   return headA;
// };

// var getLen = function (head) {
//   var len = 0;
//   while (head) {
//     len++;
//     head = head.next;
//   }
//   return len;
// };


var getIntersectionNode = function(headA, headB) {
 
    while (headA) {
        
        let head2 = headB;
        
        while (head2) {
            if(headA === head2){
                return headA;
            }
            head2 = head2.next;
        }
        headA = headA.next;
    }
    
    return null;
};