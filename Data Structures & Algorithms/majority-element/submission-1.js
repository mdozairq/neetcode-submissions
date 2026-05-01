class Solution {
    //Boyer-Moore Voting Algorithm
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let res = 0;
        for(const n of nums){
            if(count == 0){
                res = n;
            }

            count += res == n ? 1 : -1;
        }
         return res;
    }
}