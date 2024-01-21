// constructor
// hide the details and expose only required members

// private properties and methods

// concept of closure? and scope.

function Circle(radios) {
  this.radios = radios;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log(`defaultLocation: `, defaultLocation);
    console.log("draw");
  };

  Object.defineProperty(this, 'defaultLocation', {
   get: function(){
    console.log(defaultLocation)
    return defaultLocation;
   },
   set: function(value){
    if(!value.x && !value.y) throw new Error('Invalid Location')
    defaultLocation  = value
   }
  });

}


const circle = new Circle(4)

circle.draw()

console.log(circle.defaultLocation)