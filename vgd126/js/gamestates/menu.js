/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:128, height:64,y:canvas.height/2+64}).makeSprite(buttonData) 


var menuBackground = new GameObject();
menuBackground.img.src = "images/Menu-background.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.doom.play()
			sounds.doom.loop = true
		}

		//Hover Effect Graffic
		startButton.changeState('hover')
		canvas.style.cursor= 'pointer'
	}
	else
	{
		//Default Button Graphic
		startButton.changeState('idle')
		canvas.style.cursor= 'auto'
	}
	
	menuBackground.drawStaticImage();
	startButton.play().drawSprite()
}
	
	
