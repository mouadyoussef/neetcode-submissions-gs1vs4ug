class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    const n = numbers.length;
    let l = 0
    let r = n-1

    while (l<r) {
        const sum = numbers[l]+numbers[r]
        if(sum === target) {
            return [l+1, r+1]
        }

        if (sum < target) {
            l++;
        } else {
            r--;
        }
    }
  }
}
