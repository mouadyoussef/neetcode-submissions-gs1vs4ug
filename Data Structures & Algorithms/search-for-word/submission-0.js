class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word, index) {
        const visited = [];
        const rows = board.length;
        const cols = board[0].length;

        for (let i = 0; i < rows; i++) {
            visited[i] = [];
            for (let j = 0; j < cols; j++) {
                visited[i][j] = false;
            }
        }

        function backtrack(i, j, index) {
            if (index === word.length) {
                return true;
            }

            if (i < 0 || i >= rows || j < 0 || j >= cols) {
                return false;
            }

            if (visited[i][j] || board[i][j] !== word[index]) {
                return false;
            }

            visited[i][j] = true;

            const r =
                backtrack(i - 1, j, index + 1) ||
                backtrack(i + 1, j, index + 1) ||
                backtrack(i, j - 1, index + 1) ||
                backtrack(i, j + 1, index + 1);

            visited[i][j] = false;
            return r;
        }


        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (backtrack(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
