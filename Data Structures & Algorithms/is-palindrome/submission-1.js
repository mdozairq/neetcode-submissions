class Solution {
    alphaNum(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // let str = s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "")
        // let revStr = str.split("").reverse().join("");
        // return revStr == str;

        let l = 0,
            r = s.length - 1;

        while (l < r) {
            while (l < r && !this.alphaNum(s[l])) {
                l++;
            }
            while (r > l && !this.alphaNum(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;

    }
}
