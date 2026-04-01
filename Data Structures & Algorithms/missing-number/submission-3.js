class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const supposedSum = (nums.length * (nums.length + 1)) / 2;
        let sum = 0;

        for (let num of nums) {
            sum = sum + num;
        }

        return supposedSum - sum;
    }
}
