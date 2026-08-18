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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let counter = 0;
        let temp = head;
        while(temp != null){
            counter++;
            temp = temp.next;
        }

        let removePosition = counter - n;
        if (removePosition === 0) {
            return head.next;
        }
        temp = head;
        for(let i=0; i<counter-1; i++){
            if(i+1 === removePosition){
                temp.next = temp.next.next;
                break;
            }
            temp = temp.next;
        }

        return head;
    }
}
