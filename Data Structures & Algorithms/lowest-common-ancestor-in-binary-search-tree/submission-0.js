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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root || root.val === q.val || root.val === p.val) {
            return root;
        }

        if (p.val < root.val && q.val < root.val) {
            // check left
            return this.lowestCommonAncestor(root.left, p, q)
        } else if (p.val > root.val && q.val > root.val) {
            // check right
            return this.lowestCommonAncestor(root.right, p, q)
        }
        return root;
    }
}
