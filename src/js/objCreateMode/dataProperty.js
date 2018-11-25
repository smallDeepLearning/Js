/*
 * ECMA-262 <5版>
 * 定义: 描述属性(property)的各种特征(attribute)
 * 作用: 为了实现JS引擎用的，只有内部才用到的特性，在JS中不能直接访问它们。
 * ECMAScript中的属性 == 数据属性 + 访问器属性
 * 数据属性包含一个数据值的位置，在这个位置上可以读取和写入值。
 * 数据属性具有4个描述其行为的特性
 * {
     [[Configuarable]]: true
     [[Enumerable]]: true
     [[Writable]]: true
     [[Value]]: undefined
   }
*/

// 当在对象上直接定义属性时，它们的[[Configurable]]、[[Enumerable]]、[[Writable]]都会设置为true
// 而[[value]]特性被设置为指定的值

var person = {
  name: 'Nicholas'
}

// step1: 创建一个名为name的属性，为它指定的值是"Nicholas"
// step2: [[value]]特性将被设置为"Nicholas", 而对这个值得任何修改都将会反映到这个位置上

Object.defineProperty(person, 'name', {
  writable: false,
  value: 'xiaoming'
})
console.log(person.name)
person.name = 'xiaohu'
console.log(person.name)

Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'xiaohong'
})
console.log(person.name)
delete person.name
console.log(person.name)

try {
  Object.defineProperty(person, 'name', {
    configurable: true,
    value: 'xiaolan'
  })
} catch {
  console.log('操作异常')
}

// A.当属性的特性[[wriabel]]设置为false时， 在非严格模式下，赋值操作被忽略；严格模式下，将会报错
// B.当属性的特性[[configurable]]设置为false时，再次调用delete，严格模式下，将会出错；非严格模式下，不会执行
// C.可以多次调用Object.defineProperty()方法去修改同一个属性，但把configurable设置为true之后就会有限制了
