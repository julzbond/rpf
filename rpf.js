/* Rock Paper Fireball Game

1. User makes a choice
2. Computer makes a choice
3. Resolve the outcome and display the winner

Paper (-1) > Rock (1)
Rock (1) > Fireball (0)
Fireball (0) > Paper (-1)

BONUS
1. Add HTML and CSS
2. Add a play again button
3. Add a score board
4. Make the computer learn

*/


// User makes choice

var container = document.getElementById('main');

var name = prompt("What is your name?");

function displayChoice(){
  var choiceCon = document.createElement('div');
  choiceCon.className = ("choiceCon");
  choiceCon.innerHTML = (name + ": " + userChoice.toUpperCase());
  container.appendChild(choiceCon);
}

var userChoice = prompt("Rock, paper, or fireball?");
console.log(userChoice);
var userChoiceUp = userChoice.toUpperCase();

if (userChoiceUp == "ROCK"){
  var x = 1;
  
} else if (userChoiceUp == "FIREBALL"){
  var x = 0;
  
} else if (userChoiceUp == "PAPER"){
  var x = -1;
      
} else{
    var userChoice = prompt("Please choose ROCK, PAPER, or FIREBALL.");
}
  
console.log(x);

displayChoice();


// Computer makes a choice

function displayCompChoice(){
  var choiceCompCon = document.createElement('div');
  choiceCompCon.className = ("choiceCompCon");
  choiceCompCon.innerHTML = ("Hal: " + yText);
  container.appendChild(choiceCompCon);
}

var compChoice = Math.random() * 2 - 1;
var y = Math.round(compChoice);

if (y == 1){
  var yText = "ROCK";
} else if (y === 0 ){
  var yText = "FIREBALL";
} else {
  var yText = "PAPER";
}

console.log(y);
displayCompChoice();


// Resolve the outcome and display the winner

function displayWin(){
  var winCon = document.createElement('div');
  winCon.className = ("winCon");
  winCon.innerHTML = (win);
  container.appendChild(winCon);
}

var resolve = x - y;

if (resolve == -2 || resolve == 1) {
  var win = "Nice! You won!";
  
} else if (resolve == 2 || resolve == -1) {
  var win = "Bummer... The computer won.";
  
} else {
  var win = "Tie.";
}

displayWin();


// Play again button; idea: function?

var button = document.createElement("BUTTON");
button.innerHTML = ("play again");
container.appendChild(button);
