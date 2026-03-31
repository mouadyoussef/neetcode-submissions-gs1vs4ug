class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let max = 0;
        const count = new Map();

        for(let i = 0; i < nums.length; ++i) {
            const cur = (count.get(nums[i]) ?? 0) + 1
            count.set(nums[i], cur)

            if(cur > max) {
                max = cur
            }
        }

        const buckets = Array.from({ length: max + 1 }, () => []);

        for(const [key, value] of count) {
            buckets[value].push(key);
        }

        const res = []
        for(let i = buckets.length - 1, j = k; j > 0; --i) {
            j -= buckets[i].length
            res.push(...buckets[i])
        }

        

        console.log(buckets, max, res)
        return res
    }
}
