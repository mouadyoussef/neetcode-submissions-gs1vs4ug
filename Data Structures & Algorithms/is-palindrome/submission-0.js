class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        for (let x = 0, y = s.length - 1; x < y; ++x, --y) {
            while (x < y && !this.isAlphanumeric(s[x])) {
                x++;
            }
            while (y > x && !this.isAlphanumeric(s[y])) {
                y--;
            }

            if (s[x].toLowerCase() !== s[y].toLowerCase()) {
                return false;
            }
        }

        return true;
    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
