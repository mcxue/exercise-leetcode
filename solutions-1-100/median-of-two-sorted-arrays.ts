// 4. 寻找两个正序数组的中位数 https://leetcode.cn/problems/median-of-two-sorted-arrays/

/**
 * 简单版，将两个数组合并成一个大数组后然后计算中位数，它的时间复杂度为 O(n+m)，不满足 O(log(n+m)) 的要求
 * 满足需求的版本需要用二分法
 * @param nums1
 * @param nums2
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const list: number[] = [];
  let cursor1 = 0;
  let cursor2 = 0;
  while (cursor1 < nums1.length && cursor2 < nums2.length) {
    if (nums1[cursor1] <= nums2[cursor2]) {
      list.push(nums1[cursor1]);
      cursor1 += 1;
    } else {
      list.push(nums2[cursor2]);
      cursor2 += 1;
    }
  }
  if (cursor1 >= nums1.length) {
    while (cursor2 < nums2.length) {
      list.push(nums2[cursor2]);
      cursor2 += 1;
    }
  } else if (cursor2 >= nums2.length) {
    while (cursor1 < nums1.length) {
      list.push(nums1[cursor1]);
      cursor1 += 1;
    }
  }
  const index = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    return (list[index] + list[index - 1]) / 2;
  } else {
    return list[index];
  }
}

/**
 * 预期结果 2 2.5 2.5
 */
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 4], [2, 3]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
