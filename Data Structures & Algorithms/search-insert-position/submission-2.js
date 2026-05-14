class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let ans = nums.length;
        while (l <= r) {
            let mid = Math.floor((r + l) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] > target) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return ans;
    }
}
