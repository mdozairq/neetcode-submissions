class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let n=s.length;
        let i=0;
        let j=0;
        let ans=0;
        let maxF = 0;
        let maxFreq =new Map()
        while(j<n){
            maxFreq.set(s[j], (maxFreq.get(s[j]) || 0)+1);

            maxF = Math.max(maxFreq.get(s[j]), maxF);

            if((j-i+1)-maxF > k){
                maxFreq.set(s[i], (maxFreq.get(s[i]) || 0)-1);
                i++;
            }

            ans = Math.max(ans, j-i+1);
            j++;
        }

        return ans;
    }
}
