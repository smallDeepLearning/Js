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
 * 在这个例子中，person对象与前面例子中的person对象一样，都有相同的属性和方法
 * 这些属性在创建时都带有一些特征值: JavaScript
*/
