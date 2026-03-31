class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()
        for (let i = 0; i < nums.length; i++) {
            console.log(m.has(nums[i]), nums[i], target - nums[i] === nums[i])
            if(m.has(nums[i]) && target - nums[i] === nums[i]) {
                return [m.get(nums[i]), i]
            }

            m.set(nums[i], i);
        }
console.log(m)
        for (let i = 0; i < nums.length; i++) {
            const diff = m.get(target - nums[i]);
            
console.log(diff)
            if (diff && diff !== i) {
                return [i, diff];
            }
        }

        return []
    }
}
