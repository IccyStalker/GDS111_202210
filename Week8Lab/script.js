var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 1;
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = true;
var score = 0;

var shipSprite = new Image()
shipSprite.src = "images/gh.jpg" 
shipSprite.onload = function(){


}

var asteroidSprite = new Image()
asteroidSprite.src = "images/gh.jpg"
asteroidSprite.onload = function(){

}

var gameStates = []
var currentState = 0
var ship                    //if(invincible) {..... do something 


function randomRange(high, low){
    return Math.random() * (high-low) + low;
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(10,2);
    this.x = randomRange(c.width - this.radius, 0 + this.radius);
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height;
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10,5);
    this.color = "red";

    this.draw = function(){
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        context.closePath();
        context.fill();
        context.restore();

        context.drawImage(shipSprite,-20,-20,40,40);
        console.log("asteroidSprite drawImage()");
    }
}

function  gameStart() {
 //for loop to create the intances of the asteroids
 for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();

    //create the instance  of the ship for the game
    ship = new PlayerShip()
 }
}//gameStart() CLOSE

//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;
    
    

    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        //this draws the flame behind the ship
        if(this.up == true){
            context.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10;
            }
            else{
                this.flamelength = 30;
            }
            context.fillStyle = "red";
            context.beginPath();
            context.moveTo(0, this.flamelength);
            context.lineTo(5, 5);
            context.lineTo(-5, 5);
            context.lineTo(0, this.flamelength);
            context.closePath();
            context.fill();
            context.restore();
        }
        /*context.beginPath();*/
        context.fillStyle = "red";
        /*context.fillStyle = "green";
        context.moveTo(0, -13);
        context.lineTo(10, 10);
        context.lineTo(-10, 10);
        context.lineTo(0, -13);
        context.closePath();
        context.fill();
        context.restore()*/
       
        context.drawImage(shipSprite,-20,-20,40,40);
        console.log("shipSprite drawImage()");

        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
        //adds boundaries and keeps ship on the screen
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0;
        }
        //check to see if we are past the top of the canvas
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        //left side
        if(this.x < 0 + 10){
            this.x =  10;
            this.vx = 0;
        }
    }
}

//create the instance of the ship for the game
//var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    //console.log("Key Down " + e.keyCode);

  if(gameOver == false) {
  
    if(e.keyCode === 38){
        ship.up = true;
    }
    if(e.keyCode === 37){
        ship.left = true;
    }
    if(e.keyCode === 39){
        ship.right = true;
    }
 } 
  if(gameOver == true) {

    if(e.keyCode === 13) {

        if(currentState == 2) {
            score = 0
            numAsteroids = 10
            asteroids = []
            gameStart()

            currentState = 0 
        }

        else {

            gameStart()
            gameOver = false
            currentState = 1
            setTimeout(scoreTimer, 1000)
        }
    }
}



}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode);
    if(e.keyCode === 38){
        ship.up = false;
    }
    if(e.keyCode === 37){
        ship.left = false;
    }
    if(e.keyCode === 39){
        ship.right = false;
    }
}

//GAME STATES FOR START MENUE GAMEPLAY AnD GAME OVER

gameStates[0] = function() {
    context.save()
    context.font = "30px Arial"
    context.fillStyle = "red"
    context.textAlign = "center"
    context.fillText("Asteroid Avoidance", c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("Press ENTER to Start!", c.width/2, c.width/2 + 30)
    context.restore()

}

gameStates[1] = function() {//GAMEPLAY STATE
//display score
context.save();

context.font = "15px Arial" //make your own later!
context.fillStyle = "white"
context.fillText("score: " + score.toString(), c.width - 150, 30); 
context.restore()

 //ship.vy += gravity;

 if(ship.up == true){
    ship.vy = -10;
}
else{
    ship.vy = 3;
}

if(ship.left == true){
    ship.vx = -3;
}
else if(ship.right == true){
    ship.vx = 3;
}
else{
    ship.vx = 0;
}

for(var i = 0; i < asteroids.length; i++) {
   //using the distance formula to find distance between ship and asteroids - needed for collision
   var dX = ship.x - asteroids[i].x
   var dY = ship.y - asteroids[i].y
   var dist = Math.sqrt((dX*dX) + (dY*dY))

   //check for collision and if so end game
   if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))) {
       //console.log(secret stuff for W9D2)
       gameOver = true
       currentState = 2
       //document.removeEventListener("keydown", keyPressDown)
       //document.removeEventListener("keyup", keyPressUp)
   }

   //checks to see if asteroid is offscreen
   if(asteroids[i].y > c.height + asteroids[i].radius) {
       //reset asteroids position off screen
       asteroids[i].y = randomRange(c.height - asteroids[i].radius,  0 + asteroids[i].radius)-c.height;
       asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
   }

   if(gameOver == false) {
       asteroids[i].y += asteroids[i].vy;
   }
   asteroids[i].draw();
}



   ship.draw()
   if(gameOver == false) {
       ship.move()
   }

   while(asteroids.length < numAsteroids) {
       //add a new asteroid to the array!
       asteroids.push(new Asteroid())
   }
}

gameStates[2] = function() {
    context.save()
    context.font = "30px Arial"
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("GAME OVER Your score was: " + score.toString(), c.width/2, c.height/2 - 30)
    context.font = "15px Arial"
    context.fillText("Press ENTER to Start!", c.width/2, c.height/2 + 30)
    context.restore()
}
    

    




function main(){
    context.clearRect(0,0, c.width, c.height);

    /*
      where original gameplay code was

    */
   gameStates[currentState]() //allows screen to follow the appropriate state

    timer = requestAnimationFrame(main);
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        //console.log(score);
        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer,1000);
    }
}
//scoreTimer();

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}