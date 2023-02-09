// 9. 回文数 https://leetcode.cn/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  let str = String(x);
  return str === str.split('').reverse().join('')
}

/**
 * 预期结果 true
 */
// console.log(isPalindrome(121))
