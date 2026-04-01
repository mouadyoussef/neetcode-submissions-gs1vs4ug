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
     * @return {void}
     */
    reorderList(head) {
        if (!head.next) {
            return head;
        }

        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // slow is the mid of the list now; so slow.next is the start of the second half of the list

        let lastHalf = this.reverseList(slow.next);
        slow.next = null
        let res = head;
        while (lastHalf) {
            let temp = res.next;
            let temp2 = lastHalf.next
            res.next = lastHalf;
            lastHalf.next = temp
            res = temp;
            lastHalf = temp2
        }
        return res;
    }

    reverseList(head) {
        let prev = null;
        let curr = head;
        let temp = null;

        while (curr) {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }


        return prev;
    }
}
