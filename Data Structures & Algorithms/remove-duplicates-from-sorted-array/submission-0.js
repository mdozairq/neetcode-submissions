class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let s = [...new Set(nums)];
        console.log(s)
        for(let i=0; i<s.length; i++){
            nums[i] = s[i];
        }
        return s.length;
    }
}
