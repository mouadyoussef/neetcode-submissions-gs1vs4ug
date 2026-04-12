class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const memo = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            memo[i] = memo[i >> 1] + (i & 1);
        }

        return memo;
    }
}
