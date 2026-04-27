class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  getConcatenation(nums) {
    const ans = new Array(nums.length * 2);
    let i = 0;
    for (; i < nums.length; ) {
      ans[i] = ans[i + nums.length] = nums[i++];
    }

    return ans;
  }
}
