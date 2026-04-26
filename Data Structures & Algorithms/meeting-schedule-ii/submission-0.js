/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
    const ends = intervals.map((i) => i.end).sort((a, b) => a - b);
    let rooms = 0;
    let endPtr = 0;

    for (let i = 0; i < starts.length; i++) {
      if (starts[i] < ends[endPtr]) {
        rooms++;
      } else {
        endPtr++;
      }
    }

    return rooms;
  }
}
