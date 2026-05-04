class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        const search = (i, j) => {
            if (board[i][j] === "X") return;
            const stack = [[i, j]];
            while (stack.length) {
                const [ni, nj] = stack.pop();
                if (ni < 0 || nj < 0 || ni >= rows || nj >= cols || board[ni][nj] !== "O") {
                    continue;
                }

                board[ni][nj] = "S"; // mark as safe
                stack.push([ni - 1, nj]);
                stack.push([ni + 1, nj]);
                stack.push([ni, nj - 1]);
                stack.push([ni, nj + 1]);
            }
        };

        for (let i = 0; i < rows; i++) {
            search(i, 0);
            search(i, cols - 1);
        }
        for (let j = 0; j < cols; j++) {
            search(0, j);
            search(rows - 1, j);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (board[i][j] === "O") board[i][j] = "X";
                if (board[i][j] === "S") board[i][j] = "O";
            }
        }
    }
}
