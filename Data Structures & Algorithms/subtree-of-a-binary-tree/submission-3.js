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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();
            if (this.isSame(node, subRoot)) {
                return true;
            }

            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
        }
        return false;
    }

    isSame(q, p) {
        if (!q && !p) {
            return true;
        }

        if (q?.val !== p?.val) {
            return false;
        }

        return this.isSame(q.left, p.left) && this.isSame(q.right, p.right);
    }
}
