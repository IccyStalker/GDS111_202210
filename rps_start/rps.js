//RPS part 1 Jaavascript -- W6D1 class

//creat an Array that will store the image being used
//ARRAY: it's just like a variable (so it's a data storage device) BUT it cam contain more than one value

var pics = new Array() //creates an empty array

//assign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array name + index gives access to the indiv value
pics[0] = "images/download (1).jpg"
pics[1] = "images/Michael Myers (1).jpg"
pics[2] = "images/Jason Voorhees (1).jpg"

var pics2 = new Array()

pics2[0] = "images/download (1).jpg"
pics2[1] = "images/Michael Myers (1).jpg"
pics2[2] = "images/Jason Voorhees (1).jpg"

//creat array holding the buttoon elements
//document.querySelectorAll grabs all of one element type
var btn = document.querySelectorAll("button")

//check your stored data in the console!
console.log(btn) //used for testing, requires the dev tools

//make the buttons clickable and runnable ALSO for the game
//add event listeners to each button
btn[0].addEventListener("click", function (e) { play(0) })
btn[1].addEventListener("click", function (e) { play(1) })
btn[2].addEventListener("click", function (e) { play(2) })

//arrays that stor the player & computer options (one array for each)
//Player ID - pId
var pId = new Array("rock_p", "paper_p", "scissors_p")
//pId[1] = "paper_p"
//Computer ID - cId
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a function that will swap the regular images with the highlighted ones (series 2 pics)
function swap(id, image) {

    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image

}

//play function
function play(id) {

    //setting up the stored image paths (src) in JS to match the HTML ones
    //swap() CALLS the function --> this gets its code to run!
    //values supplied inside of () 
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the game choices to cariables (player & comp)
    var p_choice = id

    //randomize the computer's choice!
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice],)
    swap(cId[c_choice], pics2[c_choice],)

    //SWITCH TIME - switch statements give us the option to determine a set of code to run based on a predetermined case value

    switch(p_choice) {
        //cases need to be built for *every* option p_choice can be!

        //0 is ROCK
        case 0://case for when p_choice == 0
            if(c_choice == 0) {//comp is scissors

               //alert the user that there has been a draw
               alert("Both Killers DRAW!")

               //callshowResults() and pass correct values for: pChoice, cChoice, Results
               showResults("Rock!", "Rock!", "its a DRAW XD")
           }
           else if (c_choice == 1) {//comp is rock

               alert("you LOST to the computer!")
           }
           else {//comp is paper

               alert("You Win with Jason!")
           }
           break
           //1 is PAPER
           case 1:

            if(c_choice == 1) {//comp is scissors

               //alert the user that there has been a draw
               alert("Both Killers DRAW!")
           }
           else if (c_choice == 2) {//comp is rock

               alert("you LOST to the computer!")
           }
           else {//comp is paper

               alert("You WIN with Jason!")
           }
           break
           //2 is SCISSORS
           case 2:

             if(c_choice == 2) {//comp is scissors

                //alert the user that there has been a draw
                alert("Both killers DRAW!")
            }
            else if (c_choice == 0) {//comp is rock

                alert("you LOST to the computer!")
            }
            else {//comp is paper

                alert("You WIN with Jason!")
            }
            break

        }//end switch statement



 }//play() CLOSE

 function showResults(pChoice, cChoice, results) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results

 }

