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