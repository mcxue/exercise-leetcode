// 1. 两数之和 https://leetcode.cn/problems/two-sum/

/**
 * 简单版，遍历两遍
 * @param nums
 * @param target
 */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));

/**
 * 使用哈希表存储所遍历的数字与其下标，只需要遍历一遍
 * @param nums
 * @param target
 */
function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i <= nums.length - 1; i++) {
    let s = target - nums[i];
    console.log(s);
    if (Number.isInteger(map.get(target - nums[i]))) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
  return [-1, -1];
}

/**
 * 预期结果 [0,1] 或 [1,0]
 */
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum2(nums, target));
