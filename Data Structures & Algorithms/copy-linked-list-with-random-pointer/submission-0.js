// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let copySet = new Map()
        copySet.set(null, null);
        let curr = head;
        while(curr){
            let copyNode = new Node(curr.val);
            copySet.set(curr,  copyNode)
            curr = curr.next;
        }
        curr = head;
        while(curr){
            const copyNode = copySet.get(curr);
            copyNode.next = copySet.get(curr.next);
            copyNode.random = copySet.get(curr.random);
            curr = curr.next;
        }
        return copySet.get(head);
    }
}
