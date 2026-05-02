class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = Array.from({ length: grid.length }, () =>
            new Array(grid[0].length).fill(false),
        );
        let result = 0;
        const dfs = (i, j) => {
            if (
                i < 0 ||
                i >= grid.length ||
                j < 0 ||
                j >= grid[0].length ||
                visited[i][j] ||
                !grid[i][j]
            ) {
                return 0;
            }
            visited[i][j] = true;

            return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
            //     ↑ this cell + all connected land cells
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                result = Math.max(result, dfs(i, j));
            }
        }
        return result;
    }
}
