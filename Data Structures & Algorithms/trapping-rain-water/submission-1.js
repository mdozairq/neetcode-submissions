class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        if (n == 0) {
            return 0;
        }
        let maxPrefix = new Array(n).fill(0);
        let maxSuffix = new Array(n).fill(0);

        maxPrefix[0] = height[0];
        for (let i = 1; i < n; i++) {
            maxPrefix[i] = Math.max(height[i], maxPrefix[i - 1]);
        }

        maxSuffix[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            maxSuffix[i] = Math.max(height[i], maxSuffix[i + 1]);
        }

        let res = 0;
        for (let i = 0; i < n; i++) {
            res += Math.min(maxPrefix[i], maxSuffix[i]) - height[i];
        }
        return res;
    }
}
