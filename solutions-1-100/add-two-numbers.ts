// 2. 两数相加 https://leetcode.cn/problems/add-two-numbers/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * 将两个链表同时向后遍历
 * @param l1
 * @param l2
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1?.val ? l1.val : 0;
    const n2 = l2?.val ? l2.val : 0;
    const sum = (n1 + n2 + carry);
    carry = Math.floor(sum / 10);
    if (!head) {
      head = new ListNode(sum % 10);
      tail = head;
    } else {
      tail!.next = new ListNode(sum % 10);
      tail = tail!.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    tail!.next = new ListNode(carry);
  }
  return head;
}

/**
 * 预期结果 7 0 8
 */
// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);
// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);
// console.log(addTwoNumbers(l1, l2));
