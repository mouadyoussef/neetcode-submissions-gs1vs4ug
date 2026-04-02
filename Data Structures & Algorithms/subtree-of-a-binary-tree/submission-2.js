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
        let stack = [root]

        while (stack.length > 0) {
            let node = stack.pop();
            if (this.isSame(node, subRoot)) {
                return true;
            }
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
        }

        return false;
    }

    isSame(t1, t2) {
        if (!t1 && !t2) {
            return true;
        }

        if (t1?.val !== t2?.val) {
            return false;
        }

        return this.isSame(t1.left, t2.left) && this.isSame(t1.right, t2.right)
    }
}
