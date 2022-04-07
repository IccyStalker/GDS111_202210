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

	if(player.y < 0 + player.height/2)
    {
        player.y = 0 + player.height/2;
        
       
	}

	if(player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
       

    }

	/*if(player.hitTestObject(ball))
	{
		player.x = 80;
		console.log("colliding");
		player.x = player.x - player.width/2 - player.width/2
		player.y = player.x - player.width/2 - player.width/2 
	} */


	//Update the Screen
	player.drawRect();
}

