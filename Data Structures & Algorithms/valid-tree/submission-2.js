class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false; // tree = n-1 edges
        const map = new Map();
        const visited = new Set();

        for (let i = 0; i < n; i++) {
            map.set(i, []);
        }

        for (const [a, b] of edges) {
            map.get(a).push(b);
            map.get(b).push(a);
        }

        function dfs(node) {
            visited.add(node);
            for (const neighbor of map.get(node)) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }

        dfs(0);
        return visited.size === n;
    }
}
