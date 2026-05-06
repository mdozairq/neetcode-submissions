class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i=0, j=0;
        let ans=""
        while(i<word1.length && j<word2.length){
            ans += (word1[i]+word2[j])
            i++;
            j++;
        }

        if(ans.length < (word1.length+word2.length)){
            while(i<word1.length){
                ans += word1[i];
                i++;
            }

            while(j<word2.length){
                ans += word2[j];
                j++;
            }
        }
        return ans;
    }
}
