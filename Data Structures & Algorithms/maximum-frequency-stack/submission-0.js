class FreqStack {
    constructor() {
        // Tracks the absolute frequency of each individual value: { value -> frequency }
        this.freqMap = new Map();
        
        // Maps a specific frequency to a stack of elements: { frequency -> [values] }
        this.groupMap = new Map();
        
        // Tracks the highest active frequency tier currently in the data structure
        this.maxFreq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       // 1. Calculate and update the new frequency for this value
        const f = (this.freqMap.get(val) || 0) + 1;
        this.freqMap.set(val, f);

        // 2. Adjust the global max frequency if this tier is brand new
        if (f > this.maxFreq) {
            this.maxFreq = f;
        }

        // 3. Instantiate the stack array for this tier if it doesn't exist
        if (!this.groupMap.has(f)) {
            this.groupMap.set(f, []);
        }
        
        // 4. Push the element into its corresponding frequency stack
        this.groupMap.get(f).push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        // 1. Target the stack at the highest frequency tier
        const topStack = this.groupMap.get(this.maxFreq);
        
        // 2. The top item of this tier is our target (most frequent + closest to top)
        const val = topStack.pop();

        // 3. Decrement its frequency tracking counter
        this.freqMap.set(val, this.freqMap.get(val) - 1);

        // 4. Clean up: If the highest tier stack is now completely empty, drop the maxFreq level down
        if (topStack.length === 0) {
            this.maxFreq--;
        }

        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
