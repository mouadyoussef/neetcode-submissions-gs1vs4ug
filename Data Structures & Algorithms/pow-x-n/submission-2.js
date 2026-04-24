class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    if (n === 0) {
      return 1;
    }

    let pow = Math.abs(n);

    let result = x;
    while (--pow > 0) {
      result *= x;
    }

    if (n < 0) {
      return 1 / result;
    }

    return result;
  }
}
