/*
 * 最初模式
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
