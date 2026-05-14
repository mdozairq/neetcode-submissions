class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = Number.MIN_SAFE_INTEGER
        for(let i=0; i<=heights.length; i++){
            while(stack.length && (i == heights.length || heights[stack[stack.length-1]] >= heights[i])){
                let length = heights[stack.pop()];
                let width = stack.length == 0 ? i : i - stack[stack.length-1]-1;
                let area = length * width;
                maxArea = Math.max(area, maxArea);
            }
            stack.push(i)
        }

        return maxArea
    }
}
