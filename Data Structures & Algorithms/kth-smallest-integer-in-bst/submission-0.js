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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        let node = root;
        let stack = []
        while (node) {
            stack.push(node)
            node = node.left;
        }

        let poped = 0;
        while (stack.length > 0) {
            let cur = stack.pop()
            if (++poped === k) {
                return cur.val;
            }

            cur = cur.right

            while (cur) {
                stack.push(cur)
                cur = cur.left;
            }
        }

    }
}
