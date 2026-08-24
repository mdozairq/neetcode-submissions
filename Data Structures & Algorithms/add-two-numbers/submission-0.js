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
    reverse(head){

    }
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        if(!l1 && !l2){
            return l1;
        }
        let temp = new ListNode();
        let newSumHead = temp;
        let carry = 0;
        while(l1 || l2 || carry){
            let n1 = l1 ? l1.val : 0;
            let n2 = l2 ? l2.val : 0;
            let sum = n1+n2+carry;
            carry = Math.floor(sum/10);
            sum = sum%10;
            let sNode = new ListNode(sum);
            newSumHead.next = sNode;
            newSumHead = newSumHead.next;
            l1 = l1 ? l1.next: null;
            l2 = l2 ? l2.next: null;
        }

        return temp.next;
    }
}
