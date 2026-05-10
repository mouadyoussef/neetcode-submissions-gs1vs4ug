class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        // Move to most recent: delete and re-insert
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key); // remove to re-insert at end (most recent)
        }

        this.map.set(key, value);

        if (this.map.size > this.capacity) {
            // First key in Map = least recently used
            const lruKey = this.map.keys().next().value;
            this.map.delete(lruKey);
        }
    }
}
