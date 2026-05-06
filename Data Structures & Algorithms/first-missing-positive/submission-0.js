class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a,b)=>a-b);
        let missing=1;
        for(const n of nums){
            if(n>0 && missing == n){
                if(missing != n){
                    return missing;
                }
                missing++;
            }
        }
        return missing;
    }
}
