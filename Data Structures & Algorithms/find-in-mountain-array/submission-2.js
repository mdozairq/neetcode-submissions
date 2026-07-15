/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let length =  mountainArr.length();
        let l = 1,
            r = length-2,
            peak = 0;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            const left = mountainArr.get(m - 1);
            const mid = mountainArr.get(m);
            const right = mountainArr.get(m + 1);
            if (left < mid && mid < right) {
                l = m + 1;
            } else if (left > mid && mid > right) {
                r = m - 1;
            } else {
                peak = m;
                break;
            }
        }
        // Search left portion
        l = 0;
        r = peak - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const val = mountainArr.get(m);
            if (val < target) {
                l = m + 1;
            } else if (val > target) {
                r = m - 1;
            } else {
                return m;
            }
        }

        // Search right portion
        l = peak;
        r = length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const val = mountainArr.get(m);
            if (val > target) {
                l = m + 1;
            } else if (val < target) {
                r = m - 1;
            } else {
                return m;
            }
        }

        return -1;
    }
}
