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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) return null;

        const indexes = new Map();
        inorder.forEach((x, i) => indexes.set(x, i));
        let preIdx = 0;

        const dfs = (left, right) => {
            if (left > right) return null;

            const rootVal = preorder[preIdx++];
            const root = new TreeNode(rootVal);
            const mid = indexes.get(rootVal);

            root.left = dfs(left, mid-1);
            root.right = dfs(mid + 1, right);

            return root;
        };

        return dfs(0, inorder.length - 1);
    }
}
