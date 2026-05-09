class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const hold = new Array(prices.length);
        const notHold = new Array(prices.length);

        hold[0] = -prices[0];
        notHold[0] = 0;

        for (let i = 1; i < prices.length; i++) {
            hold[i] = Math.max(hold[i - 1], notHold[i - 1] - prices[i]);
            notHold[i] = Math.max(notHold[i - 1], prices[i] + hold[i - 1]);
        }

        return notHold.at(-1);
    }
}
