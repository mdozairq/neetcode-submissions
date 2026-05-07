class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let n = nums.length;
        let unique = 0;
        // for (let i = 0; i < n - 1; i++) {
        //     for (let j = i + 1; j < n; j++) {
        //         if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        //             return true;
        //         }
        //     }
        // }
        let countMap = new Map();
        for(let i=0; i<n; i++){
            // console.log(nums[i],"->",countMap.has(nums[i]))
            if(countMap.has(nums[i]) && Math.abs(countMap.get(nums[i])-i)<=k){
                return true;
            }
            countMap.set(nums[i], i);
        }

        return false;
    }
}
