// Factory function

function createCircle(radious){
 return {
  radious,
  draw: function(){
   console.log("draw")
  }
 }
}

const circle = createCircle(2)
circle.draw()

// Constructor Function (class)

function Circle(radious){
 this.radious = radious
 this.draw = function (){
  console.log("draw")
 }
}

const another = new Circle(2)
another.draw()
// When we use new operator:
// First the "new" operater create an empty object {}
// next the 'this' properties are created
// finally 'return this' by default.

// By default "this" is pointed to GLOBAL Object
// if we runing the script in browser the global object is window
// if we running the script in nodejs the global object is GLOBAL

