class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0;
        let j=0;
        let n=s.length
        let ans=0;
        let set = new Set()
        while(j<n){
            if (!set.has(s[j])) {
            set.add(s[j]);
            ans = Math.max(ans, set.size);
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
        }
        return ans;
    }
}
