class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) {
            return false;
        }

        const open = new Set(["(", "{", "["])
        const chars = {
            "(": ")",
            "{": "}",
            "[": "]",
        }

        const stack = [];

        for (let c of s) {
            if (open.has(c)) {
                stack.push(c);
            } else {
                const p = stack.pop();
                if (chars[p] !== c) {
                    return false
                }
            }
        }

        return stack.length === 0;
    }
}
