public class Solution {
  public int[][] KClosest(int[][] points, int k) {
    // Max heap: negate distance so largest distance dequeues first
    var heap = new PriorityQueue<int[], int>();

    foreach (var p in points) {
      int dist = p[0] * p[0] + p[1] * p[1];
      heap.Enqueue(p, -dist);

      if (heap.Count > k) {
        heap.Dequeue();  // remove farthest
      }
    }

    var result = new int [k][];
    for (int i = 0; i < k; i++) {
      result[i] = heap.Dequeue();
    }

    return result;
  }
}
