class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        let n = s.length;

        for (let i = 0; i < n; i++) {
            let left = i;
            let right = i;

            while (left >= 0 && right < n && s[left] === s[right]) {
                res++;
                left--;
                right++;
            }

            left = i;
            right = i + 1;

            while (left >= 0 && right < n && s[left] === s[right]) {
                res++;
                left--;
                right++;
            }
        }

        return res;
    }
}
