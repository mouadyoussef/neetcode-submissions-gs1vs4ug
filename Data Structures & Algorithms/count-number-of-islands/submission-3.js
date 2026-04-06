class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const stack = [];
        let islands = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (visited[i][j]) {
                    continue;
                }
                visited[i][j] = true;

                if (grid[i][j] === "0") {
                    continue;
                }

                islands++;
                stack.push([i, j]);

                while (stack.length) {
                    let [x, y] = stack.pop();
                    if (x >= rows || y >= cols) {
                        continue
                    }

                    if (x - 1 >= 0 && grid[x - 1][y] === "1" && !visited[x - 1][y]) {
                        visited[x - 1][y] = true;
                        stack.push([x - 1, y])
                    }

                    if (x + 1 < rows && grid[x + 1][y] === "1" && !visited[x + 1][y]) {
                        visited[x + 1][y] = true;
                        stack.push([x + 1, y])
                    }
                    if (y - 1 >= 0 && grid[x][y - 1] === "1" && !visited[x][y - 1]) {
                        visited[x][y - 1] = true;
                        stack.push([x, y - 1])
                    }

                    if (y + 1 < cols && grid[x][y + 1] === "1" && !visited[x][y + 1]) {
                        visited[x][y + 1] = true;
                        stack.push([x, y + 1])
                    }
                }
            }
        }

        return islands;
    }
}
