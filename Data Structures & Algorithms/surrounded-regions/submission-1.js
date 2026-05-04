class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        const clusters = [];
        const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));

        const search = (i, j) => {
            if (board[i][j] === "X") return;
            const stack = [[i, j]];
            const cluster = [];
            while (stack.length) {
                const [ni, nj] = stack.pop();
                if (
                    ni < 0 ||
                    nj < 0 ||
                    ni >= rows ||
                    nj >= cols ||
                    board[ni][nj] === "X" ||
                    visited[ni][nj]
                ) {
                    continue;
                }

                visited[ni][nj] = true;
                cluster.push([ni, nj]);

                stack.push([ni - 1, nj]);
                stack.push([ni + 1, nj]);
                stack.push([ni, nj - 1]);
                stack.push([ni, nj + 1]);
            }

            if (cluster.length) {
                clusters.push(cluster);
            }
        };

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                search(i, j);
            }
        }


        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        for (const c of clusters) {
            let surrounded = true;
            for (const [i, j] of c) {
                for (const dir of dirs) {
                    if (
                        i + dir[0] < 0 ||
                        i + dir[0] >= rows ||
                        j + dir[1] < 0 ||
                        j + dir[1] >= cols
                    ) {
                        surrounded = false;
                        break;
                    }
                }

                if (!surrounded) break;
            }

            if (surrounded) {
                for (const [i, j] of c) {
                    board[i][j] = "X";
                }
            }
        }
    }
}
