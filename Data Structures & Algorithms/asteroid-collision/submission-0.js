class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for (let aster of asteroids) {
            let exploded = false;

            while (stack.length > 0 && stack[stack.length - 1] > 0 && aster < 0) {
                let top = stack[stack.length - 1];

                if (Math.abs(aster) > Math.abs(top)) {
                    stack.pop();
                    continue;
                } else if (Math.abs(aster) === Math.abs(top)) {
                    stack.pop();
                    exploded = true;
                    break;
                } else {
                    exploded = true;
                    break;
                }
            }

            if (!exploded) {
                stack.push(aster);
            }
        }

        return stack;
    }
}
