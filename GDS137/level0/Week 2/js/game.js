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
	ball = new GameObject();
	
	//------Declare the ball's speed on the x and y axis------
	ball.vx = 6;
	ball.vy = 2;
	

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

	ball.move();

    
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width - ball.width/2;
        ball.vx = -ball.vx;
        ball.color = "red"

    }
   
    if(ball.x < 0 + ball.width/2)
    {
        ball.x = 0 + ball.width/2;
        ball.vx = -ball.vx;
        ball.color = "blue"
    }
    

    if(ball.y < 0 + ball.height/2)
    {
        ball.y = 0 + ball.height/2;
        ball.vy = -ball.vy;
        ball.color = "purple"

        
        
    }
    

    
    if(ball.y > canvas.height - ball.height/2)
    {
        ball.y = canvas.height - ball.height/2;
        ball.vy = -ball.vy;
        ball.color = "black"
    }
    

	
	
	ball.drawCircle();

	

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





