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
        let min = root;
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();
            min = node;
            // min = min.val < node.val ? min : node;

            console.log(min.val, node?.val, q.val, p.val);
            if ((q.val <= node.val && p.val >= node.val) || (q.val >= node.val && p.val <= node.val)) {
                console.log(min.val, node?.val, q.val, p.val);

                return min;
            }

            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        return min;
    }
}
