class Solution {
  /**
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  uniquePaths(m, n) {
    const memo = new Array(n).fill(1);

    for (let row = 1; row < m; row++) {
      for (let col = 1; col < n; col++) {
        memo[col] = memo[col - 1] + memo[col];
      }
    }

    return memo[memo.length - 1];
  }
}
