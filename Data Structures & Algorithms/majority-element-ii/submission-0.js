class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let m = new Map()
        let answer = []
        let threshold = Math.floor(nums.length/3);
        for(const n of nums){
            m.set(n,(m.get(n) || 0)+1);
        }

        for (let [num, count] of m) {
            if (count > threshold) {
                answer.push(num);
            }
        }

        return answer;
    }
}
