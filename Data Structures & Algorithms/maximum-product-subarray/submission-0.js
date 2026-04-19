class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxProduct(nums) {
    let res = nums[0];
    let min = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; ++i) {
      const candidates = [nums[i], max * nums[i], min * nums[i]];
      max = Math.max(...candidates);
      min = Math.min(...candidates);
      res = Math.max(res, max);
    }
    return res;
  }
}
