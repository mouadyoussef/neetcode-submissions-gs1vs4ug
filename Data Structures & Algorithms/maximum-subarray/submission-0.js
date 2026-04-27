class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const newMax = Math.max(nums[i], nums[i - 1] + nums[i]);
      nums[i] = newMax;
      max = Math.max(max, newMax);
    }

    return max;
  }
}
