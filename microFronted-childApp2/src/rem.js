/*
 * @Date: 2020-06-30 10:18:32
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 22:33:38
 * @FilePath: \foo-app\src\rem.js
 */
let baseSize = 16, baseWidth = 1920, curView = document.documentElement,curWidth=curView.clientWidth

// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = curWidth / baseWidth
  // 设置页面根节点字体大小
  curView.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
export function setBase({ bSize=undefined, bWidth=undefined, cView ,cWidth}) {
  bSize && (baseSize = bSize)
  bWidth && (baseWidth = bWidth)
  cView && (curView = cView)
  cWidth&& (curWidth=cWidth)
  setRem()
}
