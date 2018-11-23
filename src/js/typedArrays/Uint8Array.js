/*
 * Uint8Array <Array>
 * 表示为一个8位无符号整型数据: 创建时内容被初始化为0；
   创建完后，以对象的方式或数组下标索引的方式引用数组中的元素
*/

/*
 * 语法格式
 * Uint*Array(length) -- 创建初始化为0的，包含length个元素的无符号整型数组
 * Uint8Array(buffer [, byteOffset [, length]]) -- new Uint8Array(buffer, 1, 4)
*/

var uint8 = new Uint8Array()

/*
 * @property BYTES_PER_ELEMENT -- 返回数组中元素的字节数
 * @property length -- 数组的长度
 * @property name -- 返回构造名的字符串
 * @property prototype -- TypedArray对象的原型
*/

console.log(Uint8Array)
console.log(uint8)

console.log(Uint8Array.BYTES_PER_ELEMENT)
console.log(uint8.BYTES_PER_ELEMENT)

console.log(Uint8Array.length)
console.log(uint8.length)

console.log(Uint8Array.name)
console.log(uint8.name)

console.log(Uint8Array.prototype)
console.log(uint8.prototype)

/*
 * @method Uint8Array.from() -- 从一个数组或可迭代的对象创建一个新的Uint8Array数组
 * @method Uint8Array.of() -- 通过一个可变的参数创建一个新的Uint8Array数组
*/
let tempStarData = [1, 2, 3]
let starData = Uint8Array.from(tempStarData)
let cometData = Uint8Array.of(10)
console.log(starData)
console.log(cometData)
