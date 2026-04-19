class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    const n = s.length;
    if (n < 2) return s;

    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0;
    let maxLen = 1;

    // Base case: single characters
    for (let i = 0; i < n; i++) dp[i][i] = true;

    // Base case: two characters
    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        maxLen = 2;
      }
    }

    // Fill for lengths 3 to n
    for (let len = 3; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
          start = i;
          maxLen = len;
        }
      }
    }

    return s.substring(start, start + maxLen);
  }
}
