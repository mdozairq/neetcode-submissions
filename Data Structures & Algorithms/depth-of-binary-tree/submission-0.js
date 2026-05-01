/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root){
            return 0
        }

        return this.iterativeDfs([[root, 1]])
    }

    iterativeDfs(stack, height = 0){
        while(stack.length){
            let [head, depth] = stack.pop()
            height = Math.max(height, depth)

            if(head.left) stack.push([head.left, depth+1])
            if(head.right) stack.push([head.right, depth+1])
        }

        return height;
    }


}
