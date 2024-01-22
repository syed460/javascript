
class Person {
 constructor(name, year){
  this.name = name
  this.year = year
 }

 calcAge(){
  console.log(`${this.name} age is ${2024 - this.year}`)
 }

}

const person = new Person("Syed", 1992)

// console.log(person.calcAge())

console.log(person.__proto__)

// Classes are not Hoisted
// functions are hoisted which means we can use the functions before that are declared.
// classes are excicuted in strict mode
// Classes are first-class citizes. classes are like functions
