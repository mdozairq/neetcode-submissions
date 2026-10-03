class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // key -> [value, freq]
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        const [val, freq] = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, [val, freq + 1]); // re-insert at end → marks as recently used
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;

        // Existing key: update value and bump frequency (do NOT reset to 1)
        if (this.cache.has(key)) {
            const [, freq] = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, [value, freq + 1]);
            return;
        }

        // Evict LFU (tie-break: oldest = LRU) when at capacity
        if (this.cache.size === this.capacity) {
            let minFreq = Infinity;
            let evictKey = null;

            for (const [k, [, f]] of this.cache) {
                if (f < minFreq) {
                    minFreq = f;
                    evictKey = k; // strict < keeps the FIRST (oldest) on ties
                }
            }
            this.cache.delete(evictKey);
        }

        // Insert new key with frequency 1
        this.cache.set(key, [value, 1]);
    }
}