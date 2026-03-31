class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums);
        
        let longuest = 0;

        for (let i = 0; i < nums.length; ++i) {
            let inc = 1;
            let currentLonguest = 1;
            while (s.has(nums[i] + inc++)) {
                ++currentLonguest;
            }

            if(currentLonguest > longuest) {
                longuest = currentLonguest;
            }
        }

        return longuest;
    }
}
