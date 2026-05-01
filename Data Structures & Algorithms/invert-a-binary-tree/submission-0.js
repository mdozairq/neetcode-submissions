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
     * @return {TreeNode}
     */
    invertTree(root) {
    const isBaseCase = root === null;
    if (isBaseCase) return root;

    return this.dfs(root)
    }

    dfs(root){
         if(!root)
    return root
    
        let temp = root.right
        root.right = root.left
        root.left = temp

        this.dfs(root.left)
        this.dfs(root.right)

        return root
    }
}
