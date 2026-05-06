class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans=0;
        for(let i=0; i<heights.length-1; i++){
            for(let j=i+1; j<heights.length; j++){
                ans = Math.max(ans, (Math.min(heights[i], heights[j])*(j-i)))
            }
        }
        return ans;
    }
}
