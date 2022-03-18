/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/valx2.png` 
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:214, height:278, startX:0, startY:0},
				{width:214, height:278, startX:214, startY:0},
				{width:214, height:278, startX:642, startY:0},
				{width:214, height:278, startX:856, startY:0},
				//{width:214, height:278, startX:1070, startY:0}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:214, height:278, startX:1284, startY:0},
				{width:214, height:278, startX:1498, startY:0},
				{width:214, height:278, startX:1712, startY:0},
				{width:214, height:278, startX:1926, startY:0},
				{width:214, height:278, startX:2140, startY:0}
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:214, height:278, startX:2354, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:214, height:278, startX:2354, startY:0},
				
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:214, height:278, startX:2568, startY:0},
				{width:214, height:278, startX:2782, startY:0},
				{width:214, height:278, startX:2996, startY:0},
				{width:214, height:278, startX:3210, startY:0},
				{width:214, height:278, startX:3424, startY:0},
				{width:214, height:278, startX:3638, startY:0},
				{width:214, height:278, startX:3852, startY:0}
				
			]
		}
	}
		
}