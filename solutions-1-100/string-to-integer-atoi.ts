// 8. 字符串转换整数 (atoi) https://leetcode.cn/problems/string-to-integer-atoi/

function myAtoi(s: string): number {
  if (!s) return 0;
  let list: string[] = [];
  let cursor = 0;
  let negativeFlag = false;
  while (s[cursor] === ' ' && cursor < s.length) { // 先将指针指向第一个非空白符
    cursor += 1;
  }
  if (s[cursor] === '-') {
    negativeFlag = true;
    cursor += 1;
  } else if (s[cursor] === '+') {
    cursor += 1;
  }
  while (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(s[cursor]) >= 0 && cursor < s.length) {
    list.push(s[cursor]);
    cursor += 1;
  }
  let pureNum = Number(list.join(''));
  let result = negativeFlag ? -pureNum : pureNum;
  if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  } else if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else {
    return result;
  }
}

/**
 * 预期结果 42
 */
console.log(myAtoi('42'));
