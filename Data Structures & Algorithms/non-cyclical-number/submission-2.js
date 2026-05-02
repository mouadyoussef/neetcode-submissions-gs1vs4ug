class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();
        let num = n;
        while (!seen.has(num)) {
            seen.add(num);
            let newNum = 0;
            while (num) {
                newNum += (num % 10) ** 2;
                num = Math.floor(num / 10);
            }

            num = newNum;

            if (num === 1) {
                return true;
            }
        }

        return false;
    }
}
