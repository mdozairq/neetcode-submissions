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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        let group = 0 
        while(curr && group<k){
            curr = curr.next;
            group++;
        }
        if(group === k){
            curr = this.reverseKGroup(curr, k);
            while(group-- > 0){
                let tmp = head.next;
                head.next = curr;
                curr = head;
                head = tmp;
            }
            head = curr;
        }
        return head;
    }

    // reverse(head){
    //     if(!head) return head;
    //     let prev = null;
    //     let curr = head;
    //     while(curr){
    //         let temp = curr.next;
    //         curr.next = prev;
    //         prev = curr;
    //         curr = temp;
    //     }
    // }
}
