// 构造函数模式
function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}

var person1 = new Person('Nicholas', 29, 'Software Engineer')
var person2 = new Person('Greg', 27, 'Doctor')
console.log(person1)
console.log(person2)

// 这两个对象都有一个constructor属性,该属性指向Person
// 对象的constructor属性最初使用来标识对象类型
console.log(person1.constructor == Person)
console.log(person2.constructor == Person)

// 提到检查对象类型，还是用instanceof操作符更为可靠些
console.log(person1 instanceof Object)
console.log(person1 instanceof Person)
console.log(person2 instanceof Object)
console.log(person2 instanceof Person)

// 典型用法，作为构造函数使用
var person = new Person('Nicholas', 29, 'Software Engineer')
person.sayName()

// 作为普通函数使用
Person('Greg', 27, 'Doctor')
window.sayName()

/* 
 * 在另一个对象的作用域里使用
 * 通过call()或apply()在某个特殊对象的作用域中调用Person()函数
 * 在o对象的作用域中调用之后，o就拥有了所有属性和sayName()方法
*/
var o = new Object()
Person.call(o, 'Kristen', 25, 'Nurse')
o.sayName()

/*
 * 构造函数的问题
 * 导致不同的作用域链和标识符解析，但是创建function的实例机制仍然是相同的
*/

console.log(person1.sayName === person2.sayName)
