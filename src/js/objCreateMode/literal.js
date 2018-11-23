/*
 * 字面量模式 -- 属性在创建时都会带有一些特征值，JS通过特征值来定义它们的行为
 * @class person
 * @attr name {string} 名字
 * @attr age {number} 年龄
 * @attr job {string} 工作
 * @method sayName {function} 展示名字
*/
var person = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName: function () {
    alert(this.name)
  }
}
console.log('[person]', person)

/*
 * ECMA-262 <5版>
 * 定义: 描述属性(property)的各种特征(attribute)
 * 作用: 为了实现JS引擎用的，只有内部才用到的特性，在JS中不能直接访问它们。
*/
