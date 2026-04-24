class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    let carry;
    for (let i = digits.length - 1; i >= 0; i--) {
      carry = false;
      if (digits[i] < 9) {
        digits[i]++;
        break;
      }

      digits[i] = 0;
      carry = true;
    }

    if(carry) {
        digits.unshift(1);
    }

    return digits;
  }
}
