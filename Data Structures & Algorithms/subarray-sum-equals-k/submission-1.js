class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let ans = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     let subArr = 0;
        //     for (let j = i; j < nums.length; j++) {
        //         subArr += nums[j];
        //         if (subArr == k) {
        //             ans++;
        //         }
        //     }
        // }
        let m = new Map();
        let currSum = 0;
        m.set(0,1)
        for(let n of nums){
            currSum += n;
            let diff = currSum - k;
            ans += m.get(diff) || 0; 
            m.set(currSum, (m.get(currSum) || 0)+1);
        }
        return ans;
    }
}
