class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor = nums.length;

        for (let i = 0; i < nums.length; i++) {
            xor ^= i ^ nums[i];
        }

        return xor;
    }
}
