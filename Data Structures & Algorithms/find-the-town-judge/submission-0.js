class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const trustsOthers = new Set();
        const trustedBy = new Map();

        for (const [a, b] of trust) {
            trustsOthers.add(a); // a trusts someone
            trustedBy.set(b, (trustedBy.get(b) || 0) + 1); // b gets trusted
        }

        for (let i = 1; i <= n; i++) {
            if (!trustsOthers.has(i) && trustedBy.get(i) === n - 1) {
                return i;
            }
        }

        return -1;
    }
}
