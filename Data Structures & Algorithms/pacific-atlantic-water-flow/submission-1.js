class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacificMemo = Array.from({ length: rows }, () => Array(cols).fill(false));
        const atlanticMemo = Array.from({ length: rows }, () => Array(cols).fill(false));

        const pacificQueue = [];
        const atlanticQueue = [];

        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]

        for (let i = 0; i < cols; i++) {
            pacificQueue.push([0, i])
            atlanticQueue.push([rows - 1, i])
        }
        for (let i = 0; i < rows; i++) {
            pacificQueue.push([i, 0])
            atlanticQueue.push([i, cols - 1])
        }

        while (pacificQueue.length) {
            const [r, c] = pacificQueue.pop();

            pacificMemo[r][c] = true;

            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !pacificMemo[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                    pacificQueue.push([nr, nc])
                }
            }
        }

        while (atlanticQueue.length) {
            const [r, c] = atlanticQueue.pop();
            atlanticMemo[r][c] = true;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !atlanticMemo[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                    atlanticQueue.push([nr, nc])
                }
            }
        }

        const res = [];

        console.log(pacificMemo)
        console.log(atlanticMemo)

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacificMemo[r][c] && atlanticMemo[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
