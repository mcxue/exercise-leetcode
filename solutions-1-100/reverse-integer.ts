// 7. 整数反转 https://leetcode.cn/problems/reverse-integer/

function reverse(x: number): number {
  const numList = String(x).split('');
  let negativeFlag = false;
  if (numList[0] === '-') {
    numList.shift();
    negativeFlag = true;
  }
  let pureNum = Number(numList.reverse().join(''));
  const result = negativeFlag ? -pureNum : pureNum;
  if (result < -Math.pow(2, 31) || (result > Math.pow(2, 31) - 1)) return 0;
  return result;
}

/**
 * 预期结果 321
 */
// console.log(reverse(123));
