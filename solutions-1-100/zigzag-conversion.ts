// 6. N 字形变换 https://leetcode.cn/problems/zigzag-conversion/

/**
 * 按照题意把整个字符摆放位置使用二维数组画出来，然后逐行遍历拿到最后的字符串
 * 这个版本最容易理解，后面还写了一个找规律的解答
 * @param s
 * @param numRows
 */
function convert(s: string, numRows: number): string {
  if (numRows === 0) return '';
  if (numRows === 1) return s;
  const matrix: string[][] = []; // 二维数组存储全部字符 // 长度不限，高度最大可访问的下标为 numsRows-1
  let cursor: { x: number, y: number } | null = null; // 第一项指向一维，第二项指向二维
  let turnFlag = false;
  for (let i = 0; i < s.length; i++) { // 遍历全部字符，根据当前的 cursor 决定下一个字符摆放在的位置
    if (cursor === null) { // 指针指向空时，表示第一次进入循环
      matrix[0] = [];
      cursor = { x: 0, y: 0 };
    } else if (turnFlag) { // 斜着走
      matrix[cursor.x + 1] = [];
      cursor.x += 1;
      cursor.y -= 1;
      if (cursor.y === 0) { // 走到顶时，把转向标记设置为 false
        turnFlag = false;
      }
    } else { // 默认往下走
      cursor.y += 1;
      if (cursor.y === numRows - 1) { // 走到底时，把转向标记设置为 true
        turnFlag = true;
      }
    }
    matrix[cursor.x][cursor.y] = s[i];
  }
  let result = '';
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i]) {
        result += matrix[j][i];
      }
    }
  }
  return result;
}

/**
 * 预期结果 "PAHNAPLSIIGYIR"
 */
// console.log(convert('PAYPALISHIRING', 3));

/**
 * 方法二：找到字符串组合的规律，然后直接按下标找到字符并组合
 * 输入为 "PAYPALISHIRING" 4，预期结果为 "PINALSIGYAHRPI" 反 N 如下
 * P     I    N     下标分别为 0 6 12              第 0 行下标相差 2*numRows - 2
 * A   L S  I G     下标分别为 1 5 7 11 13         第 1 行下标第一次相差 2*(numRows-1) - 2*r，第二次相差 2*r
 * Y A   H R        下标分别为 2 4 8 10            第 2 行下标第一次相差 2*(numRows-1) - 2*r，第二次相差 4*r
 * P     I          下标分别为 3 9                 第 numRows-1 行下标相差 2*numRows - 2
 * 得出以下规律
 * 第 0 行和 numRows -1 行的下标相差一致，为 2*numRows - 2
 * 其他行的下标会周期性变化，首次间隔相差 2*(numRows -1 - r)，第二次间隔 2*r，随后其间隔在这两个之间循环
 * 最后可以得到下面这个优雅的代码
 * @param s
 * @param numRows
 */
/**
 *
 * @param s
 * @param numRows
 */
function convert2(s: string, numRows: number): string {
  if (numRows === 0) return '';
  if (numRows === 1) return s;
  let result = '';
  for (let i = 0; i < numRows; i++) {
    let cursor = i;
    let switchIntervalFlag = false; // 有两个间隔，用该变量作为切换间隔的标志
    while (s[cursor]) {
      result += s[cursor];
      if (i === 0 || i === numRows - 1) {
        cursor += 2 * (numRows - 1);
      } else {
        cursor += switchIntervalFlag ? 2 * i : 2 * (numRows - 1 - i);
        switchIntervalFlag = !switchIntervalFlag;
      }
    }
  }
  return result;
}

/**
 * 预期结果 "PINALSIGYAHRPI"
 */
// console.log(convert2('PAYPALISHIRING', 4));
