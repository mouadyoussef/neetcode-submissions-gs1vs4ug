class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        let fresh = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) queue.push([i, j]);
                if (grid[i][j] === 1) fresh++;
            }
        }

        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let minutes = 0;
        let head = 0;
        while (head < queue.length && fresh > 0) {
            const size = queue.length; // process only this minute's batch

            while (head < size) {
                const [i, j] = queue[head++];

                for (const [di, dj] of dirs) {
                    const ni = i + di;
                    const nj = j + dj;

                    if (ni < 0 || nj < 0 || ni > rows - 1 || nj > cols - 1) {
                        continue;
                    }
                    if (grid[ni][nj] !== 1) continue;

                    grid[ni][nj] = 2;
                    fresh--;
                    queue.push([ni, nj]);
                }
            }
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
