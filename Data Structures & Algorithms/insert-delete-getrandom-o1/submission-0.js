class RandomizedSet {
    constructor() {
        this.data = new Map();
        this.nums = [];
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.data.has(val)) {
            return false;
        }
        this.data.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.data.has(val)) {
            return false;
        }

        const idx = this.data.get(val);
        const last = this.nums[this.nums.length - 1];

        this.nums[idx] = last;
        this.data.set(last, idx);

        this.nums.pop();
        this.data.delete(val);
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const index = Math.floor(Math.random() * this.data.size);
        return this.nums[index];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
