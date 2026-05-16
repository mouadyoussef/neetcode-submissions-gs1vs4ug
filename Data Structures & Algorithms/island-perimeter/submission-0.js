class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const rows = grid.length,
            cols = grid[0].length;
        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let perimeter = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    for (const [di, dj] of dirs) {
                        const ni = i + di,
                            nj = j + dj;
                        // out of bounds OR water → exposed side
                        if (ni < 0 || nj < 0 || ni >= rows || nj >= cols || grid[ni][nj] === 0) {
                            perimeter++;
                        }
                    }
                }
            }
        }

        return perimeter;
    }
}
