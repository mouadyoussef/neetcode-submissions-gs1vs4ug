class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivot = this.findMinIndex(nums)
        let left = 0;
        let right = nums.length - 1;

        if (target >= nums[pivot] && target <= nums[right]) {
            left = pivot;
        } else {
            right = pivot;
        }

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    findMinIndex(nums) {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}