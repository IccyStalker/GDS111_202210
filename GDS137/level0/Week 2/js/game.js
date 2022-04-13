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
	ball.width = 25
	ball.height = 25
	
	
	//------Declare the ball's speed on the x and y axis------
	ball.vx = -6;
	ball.vy = 0;
	

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

	if(player.x < 0 + player.width/2)
    {
        player.x = 0 + player.width/2;
        player.vx = -player.vx;
      
    } 



	ball.move();

    
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width - ball.width/2;
        ball.vx = -ball.vx;
        

    }
   
    if(ball.x < 0 + ball.width/2)
    {
        ball.x = 0 + ball.width/2;
        ball.vx = -ball.vx;
      
    } 
    

    if(ball.y < 0 + ball.height/2)
    {
        ball.y = 0 + ball.height/2;
        ball.vy = -ball.vy;
       

        
        
    }
    

    
    if(ball.y > canvas.height - ball.height/2)
    {
        ball.y = canvas.height - ball.height/2;
        ball.vy = -ball.vy;
        
    }
    

	
	
	ball.drawCircle();

	

	if(player.hitTestObject(ball))
	{
		 
	} 


	//Update the Screen
	player.drawRect();
}





