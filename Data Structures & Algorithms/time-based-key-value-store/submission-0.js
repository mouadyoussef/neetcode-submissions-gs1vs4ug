class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [[value, timestamp]]);
            return;
        }

        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.keyStore.get(key) || [];

        let left = 0;
        let right = list.length - 1;

        let result = "";

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (list[mid][1] <= timestamp) {
                result = list[mid][0]; // valid candidate, look for later one
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
