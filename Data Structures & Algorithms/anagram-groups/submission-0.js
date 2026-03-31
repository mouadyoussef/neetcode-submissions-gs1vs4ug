class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();

        for(let i = 0; i < strs.length; ++i) {
            let added = false
            for(let key of res.keys()) {
                if(this.isAnagram(key, strs[i])) {
                    res.get(key).push(strs[i])
                    added = true
                }
            }

            if (!added) {
                res.set(strs[i], [strs[i]])
            }
        }

        const arr = [];
        
        for(let r of res.values()) {
            arr.push(r);
        }

        return arr;
    }

    isAnagram(str1, str2) {
        const seen = new Map();

        for(let i = 0; i < str1.length; ++i) {
            seen.set(str1.charAt(i), (seen.get(str1.charAt(i)) ?? 0) + 1);
        }

        for(let i = 0; i < str2.length; ++i) {
            seen.set(str2.charAt(i), (seen.get(str2.charAt(i)) ?? 0) - 1);
        }

        for(let s of seen.values()) {
            if (s !== 0) {
                return false;
            }
        }

        return true;
    }
}
