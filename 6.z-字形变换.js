/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (44.57%)
 * Likes:    420
 * Dislikes: 0
 * Total Accepted:    64.8K
 * Total Submissions: 143.1K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例 1:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 *
 *
 * 示例 2:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 *
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const n = s.length;
  const cycleLen = 2 * numRows - 2;
  let ans = "";

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycleLen) {
      ans += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        ans += s[j + cycleLen - i];
      }
    }
  }

  return ans;
};
// @lc code=end

// // @lc code=start
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//   if (numRows === 1) {
//     return s;
//   }
//   let rows = new Array(numRows).fill("");
//   let curRows = 0;
//   let goingDown = false;
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     rows[curRows] += c;
//     if (curRows === 0 || curRows === numRows - 1) {
//       goingDown = !goingDown;
//     }
//     curRows += goingDown ? 1 : -1;
//   }
//   return rows.join("");
// };
// // @lc code=end
