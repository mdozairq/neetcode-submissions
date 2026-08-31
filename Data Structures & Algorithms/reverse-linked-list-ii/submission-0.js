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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head)
        let leftHead = dummy;
        let prev = null;
        let curr = head;
        for(let i=0; i<left-1; i++){
            leftHead = curr;
            curr = curr.next;
        }
        for(let i=0; i<right-left+1; i++){
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }
        leftHead.next.next = curr;
        leftHead.next = prev;
        return dummy.next;
    }
}
