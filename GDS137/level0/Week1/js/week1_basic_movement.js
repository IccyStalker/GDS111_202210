//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	ball = new Ball();
	ball.vx = 6
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.move();
	
	//Update the Screen
	ball.drawCircle();

	//ctx.beginPath()
	//ctx.acr(30,30,30,30, (2*Math.PI), false)
	//ctx.ineTo(30, 30)
	//ctx.closePath()
	//ctx.fill()
}



