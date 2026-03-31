class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        for (let l = 0, r = heights.length - 1; l < r;) {
            const minH = Math.min(heights[l], heights[r])
            console.log(l, r, minH)
            max = Math.max(max, minH * (r - l))

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return max;
    }
}
