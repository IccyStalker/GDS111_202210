//RIDDLES JavaScript file

//JS is a scripting language that can CHANGE stuff on the HTML page; it is NOT a markup language so it will follow more fundamental logic related to other computer programming styles

//VARIABLES - variables store data (information) to be used in the scrip/program; they are friendly namesto refer to info as 
//think about variables as the 



var store1 = "Carpet!"//answer to question 1
var store2 = "the Post Office!"//answer to question 2
var store3 = "NOON"//answer to question 3
var store4 = "Mercury"//answer to question 4
var store5 = "You might step in a poodle!"//answer to question 5
var store6 = "He wanted to win the No-bell prize!"//answer to question 6
var store7 = "Your teeth"//answer to question 7
var store8 = "Wet"//answer to question 8
var store9 = "Because he shot the ball"//answer to question 9
var store10 = "Shadow"//answer to question 10



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


function answer4() {

    document.getElementById("question4").innerHTML = store4;


function answer5() {

    document.getElementById("question5").innerHTML = store5;


function answer6() {

    document.getElementById("question6").innerHTML = store6;


function answer7() {

    document.getElementById("question7").innerHTML = store7;


function answer8() {

    document.getElementById("question8").innerHTML = store8;


function answer9() {

     document.getElementById("question9").innerHTML = store9;


 function answer10() {

     document.getElementById("question10").innerHTML = store10;