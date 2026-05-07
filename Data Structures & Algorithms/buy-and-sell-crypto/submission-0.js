class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let ans = 0;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                console.log(prices[j] - prices[i]);
                if (prices[j] > prices[i]) ans = Math.max(prices[j] - prices[i], ans);
            }
        }
        return ans;
    }
}
