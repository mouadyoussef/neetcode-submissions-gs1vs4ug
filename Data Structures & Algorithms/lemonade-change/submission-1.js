class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let fives = 0;
        let tens = 0;

        for (const b of bills) {
            if (b === 5) {
                fives++;
            } else if (b === 10) {
                if (fives === 0) return false;
                fives--;
                tens++;
            } else {
                // b === 20
                if (tens > 0 && fives > 0) {
                    tens--; // prefer $10 + $5
                    fives--;
                } else if (fives >= 3) {
                    fives -= 3; // fallback: three $5s
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
