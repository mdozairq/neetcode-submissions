/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr2 = slow.next;
        let prev = (slow.next = null);
        
        while(curr2 !== null){
            const temp = curr2.next;
            curr2.next = prev;
            prev = curr2;
            curr2 = temp;
        }

        let curr1 = head;
        curr2 = prev;
        while(curr2 !== null){
            const tmp1 = curr1.next;
            const tmp2 = curr2.next;
            curr1.next = curr2;
            curr2.next = tmp1;
            curr1 = tmp1;
            curr2 = tmp2; 
        }
    }
}
