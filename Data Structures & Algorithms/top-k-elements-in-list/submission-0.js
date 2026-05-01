class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hMap = {};
        
        // 1. Count frequencies
        for (const num of nums) {
            hMap[num] = (hMap[num] || 0) + 1;
        }

        // 2. Extract keys and sort them based on their frequency (value in hMap)
        let sortedKeys = Object.keys(hMap).sort((a, b) => hMap[b] - hMap[a]);

        // 3. Return the first k elements
        return sortedKeys.slice(0, k).map(Number);
    }
}
