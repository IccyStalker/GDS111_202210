var document = document.getElementById("canvas") //store canvas element as a js object
var ctx = camvas.getContext("2d")                //set up the context object relative to


var tracing = new Image()
tracing.src = "images/shapes.png"               //<img src="filepath/filename.ext">

tracing.oload = function () {


    ctx.drawImage(tracing, 0, 0, 800, 800)

    //set up he styling (fill color, stroke color, line width stroke) before actually drawing
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"

    //draw rectangle
    //contextObject
    ctx.fillRect(66, 80, 119, 541)

     //for lines, use moveTo to get the curson to drop the first point, then lineTo to draw the line
     ctx.moveTo(588, 222)
     ctx.lineTo(702, 68)
     ctx.stroke()


    //circle are made out of a completed arc
   //contectObject.arc(x, y, radius, startAngle, endAngle, isCounterClockwise)
    ctx.beginPath()
    ctx.arc(421, 206, 86, 0, (2*Math.PI), false)
    ctx.lineTo(475, 141)
    ctx.closePath()
    ctx.fill()

    //set up your style first 
    ctx.fillStlye = "rgba(0, 0, 255, 0.5)"

    //drawing irregular line-base shapes -- need to map each point and lineTo each point (except the last)
    ctx.beginPath()
    ctx.moveTo(362, 448)
    ctx.lineTo(704, 326)
    ctx.lineTo(639, 683)
    ctx.closePath() //outo lines back to starting position
    ctx.fill()
    
    ctx.strokeStyle = "rgba(100, 0, 100, 0.5)"

    ctx.moveTo(41, 749)
    ctx.lineTo(758, 749)
    ctx.stroke()
}

