class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    const n = nums.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
      const i = Math.floor((l + r) / 2);
      if (nums[i] === target) {
        return i;
      }

      if (nums[i] > target) {
        r = i - 1;
      } else {
        l = i + 1;
      }
    }

    return -1;
  }
}
