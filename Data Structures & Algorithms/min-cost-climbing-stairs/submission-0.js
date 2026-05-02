class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = Array(cost.length);
        memo[0] = cost[0];
        memo[1] = cost[1];

        for (let i = 2; i < cost.length; i++) {
            memo[i] = Math.min(memo[i - 1], memo[i - 2]) + cost[i];
        }
        return Math.min(memo[memo.length - 1], memo[memo.length - 2]);
    }
}
