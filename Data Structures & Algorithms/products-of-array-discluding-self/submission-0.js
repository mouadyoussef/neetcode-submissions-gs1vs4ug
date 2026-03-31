class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeros = 0
        let product = nums.reduce((acc, cur) => {
            if (cur === 0) {
                ++zeros;
                return acc
            }
            return acc * cur
        }, 1);

        console.log(product)

        if (zeros > 1) {
            return Array(nums.length).fill(0)
        }

        const result = nums.map(x => {
            if (zeros === 1) {
                return x === 0 ? product : 0
            }
            return product / x
        });
        return result;
    }
}
