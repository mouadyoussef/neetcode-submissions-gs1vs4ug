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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];

        this.dfs(root, res)

        return res;
    }

    dfs(root, res, depth = 0) {
        if(!root) {
            return;
        }
        if (!res[depth]) {
            res[depth] = [root.val];
        } else {
            res[depth].push(root.val);
        }

        if (root.left) {
            this.dfs(root.left, res, depth + 1);
        }
        if (root.right) {
            this.dfs(root.right, res, depth + 1);
        }
    }
}
