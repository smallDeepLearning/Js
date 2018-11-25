// Object.defineProperties() -- 定义多个属性
var book = {}
Object.defineProperties(book, {
  _year: {
    writable:true,
    value: 2004
  },
  edition: {
    writable: true,
    value: 1
  },
  year: {
    get:function() {
      return this._year
    },
    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue
        this.edition += newValue - 2004
      }
    }
  }
})

var descriptor1 = Object.getOwnPropertyDescriptor(book, '_year')
console.log(descriptor1.value)
console.log(descriptor1)
console.log(typeof descriptor1.get)
console.log(typeof descriptor1.set)

var descriptor2 = Object.getOwnPropertyDescriptor(book, 'year')
console.log(descriptor2.value)
console.log(descriptor2)
console.log(typeof descriptor2.get)
console.log(typeof descriptor2.set)
