var button1 = document.querySelector("#p1");
var button2 = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var input = document.querySelector("#score");
var displayP1 = document.querySelector("#display1");
var displayP2 = document.querySelector("#display2");
var limit = document.querySelector("p");
var winScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

var playerChoice = 0;


input.addEventListener("change", function(){
	winScoreDisplay.textContent = input.value;
	playerChoice = Number(input.value);
	reset();
})


button1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === playerChoice){
			gameOver = true;
			displayP1.classList.add("winner");
		}
		displayP1.textContent = p1Score;
	}	
})

button2.addEventListener("click", function(){
	
	if(!gameOver){
		p2Score++;
			if(p2Score === playerChoice){
				gameOver = true;
				displayP2.classList.add("winner");
			}
		displayP2.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function(){
	p1Score = 0;
	displayP1.textContent = p1Score;
	p2Score = 0;
	displayP2.textContent = p2Score;
	gameOver = false;
	displayP1.classList.remove("winner");
	displayP2.classList.remove("winner");

})

function reset(){
	p1Score = 0;
	displayP1.textContent = p1Score;
	p2Score = 0;
	displayP2.textContent = p2Score;
	gameOver = false;
	displayP1.classList.remove("winner");
	displayP2.classList.remove("winner");

}