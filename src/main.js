/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-21 12:56:45
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-27 09:43:58
 * @FilePath: \css-practice-demo\src\main.js
 */
import './style.css'

let startDate = new Date(2020, 7, 12)
let endDate = new Date(2020, 10, 19)
let dateArr = [];
let date = startDate;
while (date <= endDate) {
  date = new Date(date.getTime() + 24 * 60 * 60 * 1000)
  if (date.toLocaleDateString() === '2020/10/29') {
    dateArr.push('2020-10-29-1')
    dateArr.push('2020-10-29-2')
  } else {
    dateArr.push(date.toLocaleDateString())
  }
  dateArr[dateArr.length - 1] = dateArr[dateArr.length - 1].replace(/\//g, '-')
}
dateArr.push('bilibili')
dateArr.push('2021-12-27')


let ul = document.querySelector('ul') || document.createElement('ul')
let li = ''
dateArr.forEach(item => {
  li += `<li><a href="/css-practice-demo/${item}/index.html">${item}</a></li>`
});
ul.innerHTML = li;
document.body.appendChild(ul)

let a = document.querySelectorAll('a')
a.forEach(item => {
  item.onmouseover = function (e) {
    let frame = document.createElement('iframe')
    frame.src = item.href
    frame.style.width = '50%'
    frame.style.height = '50%'
    frame.style.border = 'none'
    frame.style.position = 'fixed'
    frame.style.top = '50%'
    frame.style.zIndex = '999'
    item.parentNode.appendChild(frame)
    if (e.clientX > window.innerWidth / 2) {
      frame.style.left = '0%'
    }
    else if (e.clientX < window.innerWidth / 2) {
      frame.style.left = '50%'
    }
  }
  item.onmouseout = function () {
    this.parentNode.removeChild(this.parentNode.lastChild)
  }
})
