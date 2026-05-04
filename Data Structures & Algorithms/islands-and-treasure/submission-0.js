class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const inf = 2 ** 31 - 1;
        const queue = [];

        // Seed queue with all treasure chests
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) queue.push([i, j]);
            }
        }
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let head = 0;

        while (head < queue.length) {
            const [i, j] = queue[head++];

            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                if (ni < 0 || nj < 0 || ni >= rows || nj >= cols) continue;
                if (grid[ni][nj] !== inf) continue; // wall, treasure, or already visited

                grid[ni][nj] = grid[i][j] + 1;
                queue.push([ni, nj]);
            }
        }

        return grid;
    }
}
