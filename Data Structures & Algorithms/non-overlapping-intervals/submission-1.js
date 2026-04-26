class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    // Sort by END time — earliest ending intervals leave the most room
    intervals.sort((a, b) => a[1] - b[1]);

    // We always keep the first interval (it ends earliest)
    let kept = 1;
    let prevEnd = intervals[0][1]; // Track where our last kept interval ends

    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] >= prevEnd) {
        // Current starts at or after previous ends → no overlap → keep it
        kept++;
        prevEnd = intervals[i][1]; // Update the boundary
      }
      // Otherwise: overlaps → we skip it (implicitly "removed")
    }

    // Total minus kept = how many we removed
    return intervals.length - kept;
  }
}
