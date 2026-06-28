class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
         if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }
        let m = nums1.length;
        let n = nums2.length;

        let l = 0,
            r = m;
        while (l <= r) {
            const partitionX = Math.floor((l + r) / 2);
            const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
            let maxLeftX = partitionX == 0 ? -Infinity : nums1[partitionX - 1];
            let minRightX = partitionX == m ? Infinity : nums1[partitionX];
            let maxLeftY = partitionY == 0 ? -Infinity : nums2[partitionY - 1];
            let minRightY = partitionY == n ? Infinity : nums2[partitionY];
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 === 0) {
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }
            }

            if (maxLeftX > minRightY) {
                r = partitionX - 1;
            } else {
                l = partitionX + 1;
            }
        }
    }
}
