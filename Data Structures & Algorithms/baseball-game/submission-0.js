class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for(let i=0; i<operations.length; i++){
            if(operations[i]=='+'){
                const top = stack.pop();
                const newTop = Number(top) + Number(stack[stack.length - 1]);
                stack.push(top);
                stack.push(newTop);
            }else if(operations[i]=='D'){
                stack.push(2 * Number(stack[stack.length - 1]));
            }else if(operations[i]=='C'){
                stack.pop();
            }else{
                stack.push(parseInt(operations[i]));
            }
        }
        return stack.reduce((a, b) => a + b, 0);
    }
}
