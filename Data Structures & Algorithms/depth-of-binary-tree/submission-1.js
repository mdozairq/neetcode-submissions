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
        const stack = [[root, 1]];
        let res = 0;

        while (stack.length > 0) {
            const [node, depth] = stack.pop();

            if (node) {
                res = Math.max(depth, res);

                if (node.left !== null) {
                    stack.push([node.left, depth + 1]);
                }

                if (node.right !== null) {
                    stack.push([node.right, depth + 1]);
                }
            }
        }

        return res;
    }
}
