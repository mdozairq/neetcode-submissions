class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        let ans = "";
        for (let char of s) {
            if (char !== ']') {
                stack.push(char);
            } else {
                // 1. Extract the encoded string inside the brackets
                let encodedString = "";
                while (stack.length && stack[stack.length - 1] !== '[') {
                    encodedString = stack.pop() + encodedString;
                }
                
                stack.pop(); // Pop the opening bracket '['
                
                // 2. Extract the full number (k) preceding the bracket
                let kStr = "";
                while (stack.length && !isNaN(stack[stack.length - 1])) {
                    kStr = stack.pop() + kStr;
                }
                let k = Number(kStr);
                
                // 3. Repeat the string k times and push it back to stack
                stack.push(encodedString.repeat(k));
            }
        }
        console.log(stack);
        console.log(stack[0])
        // Combine everything left in the stack
        return stack.join('');

        
    }
}
