// Stop watch

function Sw(){
 let start = 0
 let duration = 0
 let stop = 0

 

 this.start = function(){
  // store the current time
  start = new Date().getTime()
  console.log("Started Time")
 }

 this.stop = function(){

  stop = new Date().getTime()
  console.log(stop)
 }

 this.duration = function(){

  // calculate the time between the start and stop
  console.log(duration, stop, start)
  duration = stop - start
  console.log(`duration in milliSeconds: `, duration)
  console.log(`duration in seconds`, Math.floor(duration / 1000))
  // return duration
 }

 this.reset = function(){
  duration  = 0
  start = 0
  stop = 0
 }

}


const sw = new Sw()

sw.start()

setTimeout(() => {
 console.log(`sleeping for 5 sec`)
 sw.stop()
 sw.duration()
}, 10 * 1000);



