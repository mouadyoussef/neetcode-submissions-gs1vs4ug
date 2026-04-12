class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Set();
        const adj = new Map();
        let count = 0;

        for (let i = 0; i < n; i++) {
            adj.set(i, []);
        }

        for (const [a, b] of edges) {
            adj.get(a).push(b);
            adj.get(b).push(a);
        }

        function dfs(node) {
            if (visited.has(node)) {
                return;
            }

            visited.add(node);

            for (const e of adj.get(node)) {
                dfs(e);
            }
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                dfs(i);
            }
        }

        return count;
    }
}
