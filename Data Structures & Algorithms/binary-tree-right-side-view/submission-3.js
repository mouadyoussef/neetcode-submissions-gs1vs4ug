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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let q = [root];
        const res = [];

        while (q.length) {
            const level = [];

            res.push(q[q.length - 1].val);

            for (let i = 0; i < q.length; i++) {
                const node = q[i];
                node.left && level.push(node.left);
                node.right && level.push(node.right);
            }

            q = level;
        }

        return res;
    }
}
