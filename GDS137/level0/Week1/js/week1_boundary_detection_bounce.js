// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Ball();
	
	//------Declare the player's speed on the x and y axis------
	player.vx = 6;
	player.vy = 2;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the player's move() function----
	player.move();

    
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(player.x > canvas.width - player.width/2)
    {
        player.x = canvas.width - player.width/2;
        player.vx = -player.vx;
        player.color = "red"

    }
   
    if(player.x < 0 + player.width/2)
    {
        player.x = 0 + player.width/2;
        player.vx = -player.vx;
        player.color = "blue"
    }
    

    if(player.y < 0 + player.height/2)
    {
        player.y = 0 + player.height/2;
        player.vy = -player.vy;
        player.color = "purple"

        
        
    }
    

    
    if(player.y > canvas.height - player.height/2)
    {
        player.y = canvas.height - player.height/2;
        player.vy = -player.vy;
        player.color = "black"
    }
    

	
	
	player.drawCircle();
}
