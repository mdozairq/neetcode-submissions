class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i=0, j=0, k=0;
        for(const num of nums){
            if(num == 0){
                nums[k++] = 2;
                nums[j++] = 1;
                nums[i++] = 0;
            }else if(num == 1){
                nums[k++] = 2;
                nums[j++] = 1;
            }else{
                nums[k++] = 2;
            }
        }
    }
}
