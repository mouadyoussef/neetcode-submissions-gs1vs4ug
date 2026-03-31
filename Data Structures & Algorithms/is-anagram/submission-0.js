class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = new Map();

        for (let i = 0; i < s.length; ++i) {
            seen.set(s.charAt(i), (seen.get(s.charAt(i)) ?? 0) + 1)
        }

        
        for (let i = 0; i < t.length; ++i) {
            seen.set(t.charAt(i), (seen.get(t.charAt(i)) ?? 0) - 1)
        }

            console .log(seen)
        for (let m of seen.values()) {
            if(m !== 0) {
                return false;
            }
        }

        return true;
    }
}
