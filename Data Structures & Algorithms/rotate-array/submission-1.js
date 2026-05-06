class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        let i = 0;
        let j = k>n ? (n-(k%n)):((n - k)%n);
        let ans = [];
        while (j < n) {
            ans.push(nums[j]);
            j++;
        }
        while(i<j){
            ans.push(nums[i]);
            i++;
        }
        for(let i=0; i<n; i++){
            nums[i]=ans[i];
        }
        return nums;
    }
}
