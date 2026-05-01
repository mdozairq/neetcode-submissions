class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const majority = {}
        for(const n of nums){
            majority[n] = majority[n] ? majority[n]+1 : 1;
        }

        let max = 0, maxKey=Number.MIN_SAFE_INTEGER;
        for (const [key, value] of Object.entries(majority)) {
            [max, maxKey] = value > max ? [value, Number(key)] : [max, maxKey];
        }

        return maxKey;
    }
}