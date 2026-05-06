class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, k) {
        nums = nums.sort((a, b) => a - b);
        console.log(nums);
        let n = nums.length;
        let ans = [];
        for (let i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip i duplicates
            for (let j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip j duplicates

                let l = j + 1,
                    r = n - 1;
                while (l < r) {
                    let sum = nums[i] + nums[l] + nums[r] + nums[j];
                    if (sum < k) {
                        l++;
                    } else if (sum > k) {
                        r--;
                    } else {
                        ans.push([nums[i], nums[l], nums[r], nums[j]]);
                        while (l < r && nums[l] === nums[l + 1]) l++;
                        while (l < r && nums[r] === nums[r - 1]) r--;

                        l++;
                        r--;
                    }
                }
            }
        }
        return ans;
    }
}
