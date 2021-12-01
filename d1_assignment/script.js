var canvas = document.getElementById("canvas")

//define the draing context of the camvas element
var ctx = canvas.getContext("2d") //canvas var is the object!

//creat a new image to eventually add to the canvas this is instead of using <img> in html (doc)
var shapes = new Image()

//galaxy is now an image object and we can access any of the image attributes (properties) that we might need
shapes.src = "images/shapes.png" //we can access .src because galaxy is an image object!


//now, "write" the image to the canvas page! an event must occur for this to happen...
shapes.onload = function() {

   ctx.fillStyle = "yellow" 
    ctx.strokeStyle = "black"        
    ctx.lineWidth = "5"

    ctx.fillRect(85, 300, 109, 105)
    ctx.strokeRect(85, 300, 109, 105)

}