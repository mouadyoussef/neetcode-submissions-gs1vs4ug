class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = 0; i < n; i++) {
            dp[i][i] = true;
            res++;
        }

        for (let col = 1; col < n; col++) {
            for (let row = 0; row < col; row++) {
                if (row === col - 1 && s[col] === s[col - 1]) {
                    res++;
                    dp[row][col] = true;
                }

                if (dp[row + 1][col - 1] && s[row] === s[col]) {
                    res++;
                    dp[row][col] = true;
                }
            }
        }

        return res;
    }
}
