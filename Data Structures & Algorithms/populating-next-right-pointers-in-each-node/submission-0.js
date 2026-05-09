/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        const dfs = (node, right) => {
            if (!node) {
                return;
            }
            node.next = right;
            dfs(node.left, node.right);
            dfs(node.right, right?.left);
        };

        dfs(root, null);
        return root;
    }
}
