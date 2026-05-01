class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let m = new Map();

        for(const word of strs){
            let key = word.split('').sort().join('');
            if(!m.has(key)){
                m.set(key, []);
            }

            m.get(key).push(word);
        }

        return Array.from(m.values());
    }
}
