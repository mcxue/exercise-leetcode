// 5. 最长回文子串 https://leetcode.cn/problems/longest-palindromic-substring/

/**
 * 简单版，从中间向左、右扩散检查
 * 更好的版本的版本需要使用动态规划，简单版会有很多重复计算
 * @param s
 */
function longestPalindrome(s: string): string {
  if (!s.length) return '';
  let start = 0;
  let end = 0;
  const calIndex = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left > end - start) {
        start = left;
        end = right;
      }
      left -= 1;
      right += 1;
    }
  };
  for (let i = 0; i < s.length; i++) {
    calIndex(i - 1, i + 1); // 从中间字符 i 向左、右扩散
    calIndex(i, i + 1); // 用于中间两个字符 i、i+1 向左、右扩散
  }
  return s.slice(start, end + 1);
}

/**
 * 预期结果 bab、bb
 */
// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
