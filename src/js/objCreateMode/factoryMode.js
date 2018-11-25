// 工厂模式
function createPerson (name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}

var person1 = createPerson('Nicholas', 29, 'SoftWare Engineer')
person1.sayName()
var person2 = createPerson('Greg', 27, 'Doctor')
console.log(typeof person1)
console.log(typeof person2)
/*
 * 工厂模式抽象了创建具体对象的过程
 * 原理: 用函数来分装后，以特定接口创建对象的细节
 * 优点: 解决了创建多个相似对象的问题
 * 不足点: 没能解决对象识别问题 -- 无法知道一个对象的类型
*/
