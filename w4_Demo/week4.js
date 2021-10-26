//RIDDLES JavaScript file

//JS is a scripting language that can CHANGE stuff on the HTML page; it is NOT a markup language so it will follow more fundamental logic related to other computer programming styles

//VARIABLES - variables store data (information) to be used in the scrip/program; they are friendly namesto refer to info as 
//think about variables as the 



var store1 = "the FUTURE!"
var store2 = "the Post Office!"
var store3 = "NOON"

//***VARIABLES NAMES MUST BE UNIQUE! They are aslo cAsE sEnSiTiVe
//                total != Total != TOTAL

//FUNCTIONS - perform tasks; they have a set of processes assigned to them, and when they are CALLED their tasks are preformed

//function below will talk to the HTML DOM (Document Object Model) and get specific elements by their id, then push info to their innerHTML (inbeetween the open and close of the tag)

function answer1() {

    document.getElementById("question1").innerHTML = store1;
}

function answer2() {

    document.getElementById("question2").innerHTML = store2;
}

function answer3() {

    document.getElementById("question3").innerHTML = store3;
}