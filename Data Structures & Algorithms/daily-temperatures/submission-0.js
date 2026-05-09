class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // stores indices

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
                const j = stack.pop();
                result[j] = i - j;
            }
            stack.push(i);
        }

        return result;
    }
}
