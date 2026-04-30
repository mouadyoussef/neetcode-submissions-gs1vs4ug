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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }

        const diff = Math.abs(this.height(root.left) - this.height(root.right));

        return diff <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    height(root) {
        if (!root) return 0;
        const left = this.height(root.left);
        const right = this.height(root.right);

        return Math.max(left, right) + 1;
    }
}
