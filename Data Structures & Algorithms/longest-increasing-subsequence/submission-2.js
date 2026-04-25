class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  lengthOfLIS(nums) {
    const memo = new Array(nums.length);
    memo[0] = 1;
    for (let i = 1; i < nums.length; i++) {
      memo[i] = 1;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] < nums[i]) {
          memo[i] = Math.max(memo[j] + 1, memo[i]);
        }
      }
    }

    let max = 0;
    for (let i = 0; i < memo.length; i++) {
      max = Math.max(max, memo[i]);
    }
    return max;
  }
}
