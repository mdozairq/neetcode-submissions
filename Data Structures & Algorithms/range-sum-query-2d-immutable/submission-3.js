class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixSum = Array.from({ length: matrix.length+1 }, () =>
            Array(matrix[0].length+1).fill(0),
        );

        for (let row = 0; row < matrix.length; row++) {
            let prefix = 0;
            for (let col = 0; col < matrix[0].length; col++) {
                prefix += matrix[row][col];
                let above = this.prefixSum[row][col + 1]
                this.prefixSum[row+1][col+1] = prefix+above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    // sumRegion(row1, col1, row2, col2) {
    //     let sum=0, i=row1;
    //     while(i <= row2){
    //         let j=col1;
    //         while(j <= col2){
    //             sum+=this.mat[i][j];
    //             j++;
    //         }
    //         i++;
    //     }
    //     return sum;
    // }

    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        const bottomRight = this.prefixSum[row2][col2];
        const topLeft = this.prefixSum[row1-1][col1-1];
        const top = this.prefixSum[row1-1][col2];
        const left = this.prefixSum[row2][col1 - 1];
        return bottomRight-top-left+topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
