class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a, b) => a - b);
        let l = 0;
        let r = people.length - 1;
        let count = 0;
        while (l <= r) {
            // If the heaviest + lightest fit, move the left pointer
            if (people[l] + people[r] <= limit) {
                l++;
            }
            // The heaviest person always gets a boat
            r--;
            count++;
        }
        return count;
    }
}
