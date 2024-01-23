// Object.create


const Person = {
 calcAge(){
  console.log("This method from Object")
 },

 hey(){
  console.log(`say Hi to ${this.name}`)
 },

 init(name){
  this.name = name
 }

}

const person = Object.create(Person)

person.init("syed")

console.log(person.calcAge())

person.hey()


// TakeAwa
// Object.create will create new object (Object.create())
// the prototype of the object will the the object (Person) that we pass in