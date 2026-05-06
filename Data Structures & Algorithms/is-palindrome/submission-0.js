class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "")
        let revStr = str.split("").reverse().join("");
        return revStr == str;
    }
}
