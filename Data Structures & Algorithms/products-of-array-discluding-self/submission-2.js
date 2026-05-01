class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) {
    //     let output = new Array(nums.length);
    //     let product = 1;
    //     let countZero = 0;
    //     let zeroIndex = -1;
    //     let zeroProduct = 1;

    //     for (const n of nums) {
    //         if (n == 0) {
    //             countZero++;
    //         }
    //         product *= n;
    //     }
    //     if (countZero == 1) {
    //         for (let i = 0; i < nums.length; i++) {
    //             if (nums[i] == 0) {
    //                 zeroIndex = i;
    //                 continue;
    //             }
    //             zeroProduct *= nums[i];
    //         }
    //     }
    //     console.log(countZero);
    //     for (let i = 0; i < nums.length; i++) {
    //         if (countZero == 1 && nums[i] == 0) {
    //             output[i] = zeroProduct;
    //             continue;
    //         } else if (countZero > 1) {
    //             output[i] = 0;
    //         } else {
    //             output[i] = product / nums[i];
    //         }
    //     }

    //     return output;
    // }

    productExceptSelf(nums) {
        let output = new Array(nums.length);
        output[0] = 1;
        for (let i = 1; i < nums.length; i++) {
             output[i] = output[i-1] * nums[i-1];
        }

        let right = 1;
        for (let i = nums.length-1; i >= 0; i--) {
             output[i] = right * output[i];
             right *= nums[i]; 
        }

        return output;
    }
}
