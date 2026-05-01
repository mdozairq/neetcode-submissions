class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = ''
        strs.forEach(ele=>{
            let lt = ele.length
            newStr+=lt+'#'+ele;
        })
        return newStr;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            i = j + 1;
            j = i + length;
            result.push(str.substring(i, j));
            i = j;
        }
        return result;
    }
}
