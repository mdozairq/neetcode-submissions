class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m = board.length;
        let n = board[0].length;
        for (let i = 0; i < m; i++) {
            let row  = new Array(10).fill(0)
            let col = new Array(10).fill(0);
            let box = new Array(10).fill(0);
            console.log("step: ",i)
            for (let j = 0; j < n; j++) {
                if (board[i][j] !== ".") {
                    let num = Number(board[i][j]);
                    if (++row[num] > 1) return false;
                }

                // Check Column
                if (board[j][i] !== ".") {
                    let num = Number(board[j][i]);
                    if (++col[num] > 1) return false;
                }

                let r = 3 * Math.floor(i / 3) + Math.floor(j / 3);
                let c = 3 * (i % 3) + (j % 3);
                console.log("[", i," ,", j,"] = ", r, c)
                if (board[r][c] !== ".") {
                    let num = Number(board[r][c]);
                    if (++box[num] > 1) return false;
                }
                
            }
        }

        return true;
    }
}
