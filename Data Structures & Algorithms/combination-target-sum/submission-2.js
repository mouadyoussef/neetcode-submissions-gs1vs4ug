class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    combinationSum(nums, target) {
        const result = [];

        function backtrack(start, combo, remaining) {
            if (remaining === 0) {
                result.push([...combo]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                if (nums[i] > remaining) continue;
                combo.push(nums[i]);
                backtrack(i, combo, remaining - nums[i]);
                combo.pop();
            }
        }

        backtrack(0, [], target);
        return result;
    }
}
