//RPS part 1 Jaavascript -- W6D1 class

//creat an Array that will store the image being used
//ARRAY: it's just like a variable (so it's a data storage device) BUT it cam contain more than one value

var pics = new Array() //creates an empty array

//assign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array name + index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

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
               alert("Bloody hell let's call it a DRAW!")
           }
           else if (c_choice == 1) {//comp is rock

               alert("you LOST to the computer!")
           }
           else {//comp is paper

               alert("You WIN with your SCISSORS!")
           }
           break
           //1 is PAPER
           case 1:

            if(c_choice == 1) {//comp is scissors

               //alert the user that there has been a draw
               alert("Bloody hell let's call it a DRAW!")
           }
           else if (c_choice == 2) {//comp is rock

               alert("you LOST to the computer!")
           }
           else {//comp is paper

               alert("You WIN with your SCISSORS!")
           }
           break
           //2 is SCISSORS
           case 2:

             if(c_choice == 2) {//comp is scissors

                //alert the user that there has been a draw
                alert("Bloody hell let's call it a DRAW!")
            }
            else if (c_choice == 0) {//comp is rock

                alert("you LOST to the computer!")
            }
            else {//comp is paper

                alert("You WIN with your SCISSORS!")
            }
            break

        }//end switch statement


    }

