class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;
        for(const n of nums){
            if(!numSet.has(n-1)){
                let len = 1;
                while(numSet.has(n+len)){
                    len++;
                }
                longest = Math.max(len, longest);
            }
        }
        return longest
    }
}
