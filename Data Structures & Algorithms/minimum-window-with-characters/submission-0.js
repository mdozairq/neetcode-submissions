class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";
        let map = new Map();
        for (let ch of t) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }
        console.log(map, map.size);
        let l = 0;
        let r = 0;
        let required = map.size;
        let minLen = Infinity;
        let startNode = -1;
        while (r < s.length) {
            if (map.has(s[r])) {
                map.set(s[r], (map.get(s[r]) || 0) - 1);
                if (map.get(s[r]) === 0) required--;
            }
            while (required == 0) {
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    startNode = l;
                }

                if (map.has(s[l])) {
                    if (map.get(s[l]) === 0) required++;
                    map.set(s[l], map.get(s[l] || 0) + 1);
                }
                l++;
            }
            r++;
        }

        return minLen === Infinity ? "" : s.substring(startNode, startNode + minLen);
    }
}
