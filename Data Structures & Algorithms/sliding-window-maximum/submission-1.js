class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let ans = []
        let l=0;
        let r=l+k-1;
        while(r < nums.length){
            let max=Number.MIN_SAFE_INTEGER;
            let i=l;
            while(i<=r){
                max = Math.max(nums[i], max);
                i++;
            }
            ans.push(max);
            l++;
            r++;
        }

        return ans;
    }
}
