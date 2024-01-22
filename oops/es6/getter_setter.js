class Person {
 constructor(name, year){
  this.name = name
  this.year = year
  this._age = 3

 }
 // private properties

 get age(){ // funciton name can not be existing propertiy name
  return this._age
 }

 set age(n){
  this._age = n
 }



}

const person = new Person("syed", 1992)

console.log(person.age)

person.age = 4
console.log(person.age)
console.log(person._age)
