// 3. 无重复字符的最长子串 https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * 非常容易理解的版本，将字符串遍历一遍，维护一个最长字符串数组，将数组长度与 max 做比较
 * @param s
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  let max = 0;
  const array: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const value = s[i];
    const found = array.indexOf(value);
    if (found >= 0) {
      array.splice(0, found + 1);
      array.push(value);
    } else {
      array.push(value);
      if (array.length > max) {
        max = array.length;
      }
    }
  }
  return max;
}

/**
 * 预期结果 3、2、3、3
 */
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('aab'));
// console.log(lengthOfLongestSubstring('dvdf'));

/**
 * 稍微有一点难理解的版本，使用哈希表维护滑动窗口，将两个指针之间差值得出的最长字符串长度与 max 做比较
 * 参考 https://leetcode.cn/problems/longest-substring-without-repeating-characters/solution/longest-substring-without-repeating-characters-b-2/
 * @param s
 */
function lengthOfLongestSubstring2(s: string): number {
  if (s.length === 0) return 0;
  let max = 0;
  const map = new Map(); // 哈希表存放数组的下一个位置
  let left = 0; // 这里 cursor 是滑动窗口的左指针
  for (let right = 0; right < s.length; right++) { // 这里的 i 是滑动窗口的右指针
    left = Math.max(left, map.get(s[right]) || 0); // 取得之前存的指针
    map.set(s[right], right + 1); // 设置该字符与其下一个指针位置
    max = Math.max(max, right - left + 1);
  }
  return max;
}

/**
 * 预期结果 3、2、3、3
 */
// console.log(lengthOfLongestSubstring2('pwwkew'));
// console.log(lengthOfLongestSubstring2('aab'));
// console.log(lengthOfLongestSubstring2('dvdf'));
// console.log(lengthOfLongestSubstring2('abcabcbb'));
