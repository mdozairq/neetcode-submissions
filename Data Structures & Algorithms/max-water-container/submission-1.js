class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ans=0;
        // for(let i=0; i<heights.length-1; i++){
        //     for(let j=i+1; j<heights.length; j++){
        //         ans = Math.max(ans, (Math.min(heights[i], heights[j])*(j-i)))
        //     }
        // }
        let l=0;
        let r=heights.length-1;
        while(l<r){
            let area = (Math.min(heights[l], heights[r]))*(r-l);
            ans = Math.max(area, ans)
            if(heights[l] < heights[r]){
                l++;
            }else{
                r--;
            }
        }
        return ans;
    }
}
