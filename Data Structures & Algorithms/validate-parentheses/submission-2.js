class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        if(s.length%2 !== 0){
            return false;
        }
        for(let st of s){
            if(st == '{' || st == '[' || st == '('){
                stack.push(st);
            }else if(st == '}'){
                let top = stack.pop();
                if(top != '{')
                    return false
            }else if(st == ']'){
                let top = stack.pop();
                if(top != '[')
                    return false
            }else if(st == ')'){
                let top = stack.pop();
                if(top != '(')
                    return false
            }
        }

        if(stack.length){
            return false
        }

        return true;
    }
}
