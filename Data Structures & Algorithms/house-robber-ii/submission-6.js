class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        return Math.max(
            this.robHelper(nums.slice(1, nums.length)),
            this.robHelper(nums.slice(0, nums.length - 1)),
        );
    }

    robHelper(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        const memo = [nums[0]];
        memo[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            let max = Math.max(memo[i - 1], nums[i] + memo[i - 2]);
            memo[i] = max;
        }

        return Math.max(memo[nums.length - 1], memo[nums.length - 2]);
    }
}
