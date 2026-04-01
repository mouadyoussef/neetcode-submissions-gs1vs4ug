/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let count = 0;
        let curr = head;

        while (curr) {
            ++count;
            curr = curr.next;
        }

        let prev = null;
        curr = head;

        let indexToDelete = count - n;
        let index = 0;

        if (index === indexToDelete) {
            return head.next;
        }

        while (curr) {
            if (index === indexToDelete) {
                prev.next = prev.next.next;
                break;
            }
            ++index;
            prev = curr;
            curr = curr.next;
        }

        return head;
    }
}
