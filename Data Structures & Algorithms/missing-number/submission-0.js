class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const supposedSum = (nums.length * (nums.length + 1)) / 2;
        const sum = nums.reduce((acc, cur) => acc + cur, 0);

        console.log(supposedSum, sum)

        return supposedSum - sum;
    }
}
