class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l=0;
        let r=arr.length-k;
        while(l<r){
            let mid = Math.floor((l+r)/2)
            if(Math.abs(x-arr[mid]) > Math.abs(x-arr[mid+k])){
                l=mid+1;
            }else{
                r=mid;
            }
        }

        return arr.slice(l, l+k);
    }
}
