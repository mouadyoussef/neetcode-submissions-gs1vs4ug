class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0;
        }
        let buy = prices[0];
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] - buy > profit) {
                profit = prices[i] - buy;
            } else if (prices[i] < buy) {
                buy = prices[i];
            }
        }
        return profit;
    }
}
