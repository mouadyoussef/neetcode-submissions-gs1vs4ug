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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2
        }

        if (!list2) {
            return list1
        }

        let prev = list1.val < list2.val ? list1 : list2
        const res = prev;
        if (list1.val < list2.val) {
            list1 = list1.next;
        } else {
            list2 = list2.next;
        }

        while (list1 !== null || list2 !== null) {
            if (!list1) {
                prev.next = list2
                break;
            }

            if (!list2) {
                prev.next = list1
                break;
            }

            if (list1.val < list2.val) {
                prev.next = list1;
                list1 = list1?.next;
            } else {
                prev.next = list2;
                list2 = list2?.next;
            }
            prev = prev.next
        }

        return res;
    }
}
