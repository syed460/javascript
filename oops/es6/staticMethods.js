// a method that is private to constructor function or class

// Example, Array.from("string")
// Number.parseFloat(12.2)
// which does not work on object directly.

class Person {
 constructor(name, year){
  this.name = name
  this.year = year
 }

 // private method to the class not available in prototype of object (instance)
 static calcAge(){
  // console.log(this)
  // console.log(2024-this.year)
  console.log("This is static method of Person Class")
 }

 // Instance method are the mthods added to prototype of class available in Object instance

 calcAge(){
  console.log("this method is not static")
  console.log("added to __proto__ property\n")
 }


}


const person = new Person("syed", 1992)
person.calcAge()

Person.calcAge()


