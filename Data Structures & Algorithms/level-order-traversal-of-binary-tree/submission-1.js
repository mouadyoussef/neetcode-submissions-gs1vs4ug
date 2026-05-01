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
        if (!root) return [];
        let q = [root];
        const res = [];

        while (q.length) {
            const newQ = [];
            const newRes = [];
            while (q.length) {
                const node = q.shift();
                node.left && newQ.push(node.left);
                node.right && newQ.push(node.right);
                newRes.push(node.val);
            }
            res.push(newRes);
            q = newQ;
        }

        return res;
    }
}
