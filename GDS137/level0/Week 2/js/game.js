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
	player = new GameObject();
	player.x = 0;
	player.y = 337;
	player.width = 15;
	player.hieght = 90;
	player.color = "purple"
	

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(d)
	{
		console.log("Moving Right");
		player.x += 2;
	}
	if(a)
	{
		console.log("Moving Left");
		player.x += -2;
	}
    if(w)
	{
		console.log("moving up");
		player.y += -2;
	}
	
	if(s)
	{
		console.log("moving down");
		player.y += 2;
	} 
	
	//Update the Screen
	player.drawRect();
}

