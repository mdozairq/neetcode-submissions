class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let i=0;
        let j=0;
        let currSum = 0;
        let ans = Infinity;
        while(j<nums.length){
            currSum += nums[j];
            while(currSum >= target){
                ans = Math.min(ans, j - i + 1);
                currSum = currSum-nums[i];
                i++;
            }
            j++;
        }

        return ans == Infinity ? 0 : ans;
    }
}
