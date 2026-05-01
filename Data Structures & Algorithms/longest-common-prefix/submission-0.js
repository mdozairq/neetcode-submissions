class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for(let i=0; i<strs[0].length; i++){
            for(const st of strs){
                if(i == st.length || st[i] != strs[0][i]){
                    return st.substr(0,i);
                }
            }
        }

        return strs[0];
    }
}
