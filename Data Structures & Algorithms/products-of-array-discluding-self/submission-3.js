class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeros = 0;
        let product = 1;

        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] === 0) {
                ++zeros;
                continue;
            }
            product *= nums[i];
        }

        if (zeros > 1) {
            return Array(nums.length).fill(0);
        }

        const result = Array(nums.length);

        for (let i = 0; i < nums.length; ++i) {
            if (zeros === 1) {
                result[i] = nums[i] === 0 ? product : 0;
                continue;
            }
            result[i] = product / nums[i];
        }

        return result;
    }
}
