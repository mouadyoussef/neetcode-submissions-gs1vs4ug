class Solution {
  /**
   * @param {string} text1
   * @param {string} text2
   * @return {number}
   */
  longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let row = 1; row <= m; row++) {
      for (let col = 1; col <= n; col++) {
        if (text1[row - 1] === text2[col - 1]) {
          memo[row][col] = memo[row - 1][col - 1] + 1;
        } else {
          memo[row][col] = Math.max(memo[row - 1][col], memo[row][col - 1]);
        }
      }
    }

    return memo[m][n];
  }
}
