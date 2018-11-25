/*
 * 访问器属性 -- 包含一对getter和setter函数
 * 原理:
   {
     step1: 在读取访问器属性时，会调用getter函数，这个函数负责返回有效的值
     step2: 在写入访问器属性时，会调用setter函数并传入新值，这个函数负责决定如何处理数据
   }
 * 内容:
   {
     [[Configurable]]: 表示能否通过delete删除属性从而重新定义属性
     [[Enumerable]]: 表示能否通过for-in循环返回属性
     [[Get]]: 在读取属性时调用函数
     [[Set]]: 在写入属性时调用的函数
   }
*/
var book = {
  _year: 2004,
  edition: 1,
  _day: 10,
  mounth: 1
}

Object.defineProperty(book, 'year', {
  get: function () {
    return this._year + '年'
  },
  set: function (newValue) {
    if (newValue > 2003) {
      this._year = newValue
      this.edition += newValue - 2003
    }
  }
})

book.year = 2005
console.log(book.year)
console.log(book.edition)
