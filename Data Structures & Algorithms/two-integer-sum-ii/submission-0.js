class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let left = 0;
        let right = nums.length;
        while(left<right){
            let sum = nums[left] + nums[right];
            if(sum == target){
                return [left+1, right+1]
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }
        return [];
    }
}
