class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        let s1F = new Map();
        for (let i = 0; i < s1.length; i++) {
            s1F.set(s1[i], (s1F.get(s1[i]) || 0) + 1);
        }

        let i = 0;
        let j = 0;
        let required = s1F.size;
        while (j < s2.length) {
            if (s1F.has(s2[j])) {
                s1F.set(s2[j], (s1F.get(s2[j]) || 0) - 1);
                if (s1F.get(s2[j]) === 0) required--;
            }

            if (j - i + 1 > s1.length) {
                if (s1F.has(s2[i])) {
                    if (s1F.get(s2[i]) === 0) required++;
                    s1F.set(s2[i], s1F.get(s2[i]) + 1);
                }
                i++;
            }
            if(required == 0) return true;
            j++;
        }

        return false;
    }
}
