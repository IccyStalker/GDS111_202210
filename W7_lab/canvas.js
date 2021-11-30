//define a veriable to acces canvas properties by ID name from HTML
var canvas = document.getElementById("canvas")

//define the draing context of the camvas element
var ctx = canvas.getContext("2d") //canvas var is the object!

//creat a new image to eventually add to the canvas this is instead of using <img> in html (doc)
var galaxy = new Image()

//galaxy is now an image object and we can access any of the image attributes (properties) that we might need
galaxy.src = "images/galaxy.jpeg" //we can access .src because galaxy is an image object!


//now, "write" the image to the canvas page! an event must occur for this to happen...
galaxy.onload = function() {

    //DRAWING AN IMAGE TO THE CANVAS 
    //context.drawImage(imageObject, x, y, width, hieght)
    ctx.drawImage(galaxy, 0, 0, 800, 600)


    //DRAW A RECTANGLE
    //start with styling choices
    ctx.fillStyle = "rgb(0, 0, 255)" //the solid fill of the shape
    ctx.strokeStyle = "white"        // the outline color
    ctx.lineWidth = "5"              //width, in pixles, of the stroke

    //use .fillRect and .strokeRect once styles have been specified
    ctx.fillRect(30, 30, 100, 100) //conntext.fillRect(x, y, width, hieght)
    ctx.strokeRect(30, 30, 100, 100) //context.strokeRect(x, y, width, hieght)
                                   //GOTTA MATCH fillRect if applying to the same rectangle!
    //DRAW A LINE

    //first need to move the "drawing cursor" to the 
    ctx.moveTo(0,0)    //start position
    //next, draw a line to the ending point (x, y)
    ctx.lineTo(800, 600) //end position

    //ctx.strokeStyle = "black"      //changing the strokeStyle and lineWidth before drawing will make sure it doesn't retain previous shapes info/styling ctx.lineWidth = "1" 
   // ctx.lineWidth = "1"
    ctx.stroke()         //draws the line!


    ctx.moveTo(800, 0)
    ctx.lineTo(0, 600)

    ctx.stroke()


    //DRAW A CIRCLE
    //requires a context.beginpath(), then context.arc (x, y, radius, startAngle, endAngle, isCounterClockwise)
    //starting x y is the CENTER of the circle; radius is half of the diameter
    //isCounterClockwise is a BOOLEAN --> TRUE or FALSE
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (2*Math.PI), false)
    ctx.lineTo(450, 250)
    ctx.closePath()
    ctx.fill()        //fills the above shape
    

    //DRAW IRREGULAR SHAPE! :D
    //set up the styling first!
    ctx.fillStyle = "#55ddef"
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = "2"


    ctx.beginPath()        //begin for new shape
    ctx.moveTo(650, 100)   //starting point of shape
    ctx.lineTo(700, 140)   //draws line to this next point
    ctx.lineTo(675, 200)   //draws line to this next point
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath()        //reunites previous end point (600, 140) with starting point
    ctx.fill()
    ctx.stroke()

    //DRAW ANOTHER IMAGE TO THE CANVAS
    //create an instance of the image
    var mario = new Image()
    //links to the source of the image file
    mario.src = "images/mario.png"

    //callback function loads the image and draws loads
    mario.onload = function () {

        ctx.drawImage(mario, 600, 300, 40, 80)
    }
}

