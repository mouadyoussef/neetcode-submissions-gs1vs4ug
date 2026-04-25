class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    const result = [];
    const n = intervals.length;
    let i = 0;

    // Phase 1: Add all intervals that end before newInterval starts
    while (i < n && intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      i++;
    }

    // Phase 2: Merge all overlapping intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
    }
    result.push(newInterval);

    // Phase 3: Add remaining intervals
    while (i < n) {
      result.push(intervals[i]);
      i++;
    }

    return result;
  }
}
