public class Solution {
  public int LastStoneWeight(int[] stones) {
    var heap = new PriorityQueue<int, int>();
    foreach (var s in stones) {
      heap.Enqueue(s, -s);
    }

    while (heap.Count > 1) {
      int x = heap.Dequeue();
      int y = heap.Dequeue();
      if (y != x) {
        int diff = x - y;
        heap.Enqueue(diff, -diff);
      }
    }

    return heap.Count == 0 ? 0 : heap.Dequeue();
  }
}
