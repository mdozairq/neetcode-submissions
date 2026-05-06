class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let ans = 0;
        for (let i = 0; i < nums.length; i++) {
            let subArr = 0;
            for (let j = i; j < nums.length; j++) {
                subArr += nums[j];
                if (subArr == k) {
                    ans++;
                }
            }
        }
        return ans;
    }
}
