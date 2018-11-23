/*
 * 最初模式 -- 属性在创建时都会带有一些特征值，JS通过特征值来定义它们的行为
 * @class person
 * @attr name {string} 名字
 * @attr age {number} 年龄
 * @attr job {string} 工作
 * @method sayName {function} 展示名字
*/
var person = new Object()
person.name = 'Nicholas'
person.age = 29
person.job = 'Software Engineer'
person.sayName = function () {
  alert(this.name)
}
console.log('[person]', person)
