// how __proto__ works

function Person(name, bithOfYear){
 this.name = name
 this.bithOfYear = bithOfYear
}

Person.prototype.calcAge = function(){
 console.log(`${this.name} is ${2024 - this.bithOfYear}`)
 
}

const person = new Person("syed", "1992")

person.calcAge()

console.log(person.__proto__)


// how person.Object.hasOwnerProperty works?
// these are built in mthods of Object
// console.log(person.Object.hasOwnProperty("name"))

console.log(person.hasOwnProperty("name"))

console.log(person.__proto__)
console.log(person.__proto__.__proto__) //object prototype
console.log(person.__proto__.__proto__.__proto__) // null

console.log(Person.prototype.constructor) // function of Person itself

let arr = [1, 2, 4, 4,2, 3]

console.log(arr.__proto__ === Array.prototype)

let arr1 = new Array([23,3,3])

// Note: Prototype mechanisum is to reuse the code
// We can add prototype method into existing Objects like below
Array.prototype.unique = function (){
 return [...new Set(this)]
}

console.log(arr.unique())
// prototype chain