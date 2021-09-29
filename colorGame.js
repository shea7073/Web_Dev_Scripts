var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}
			else{
				squares[i].style.backgroundColor = "#232323";
			}
			}
});

hardBtn.addEventListener("click", function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numSquares = 6;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
				squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
		}
});


resetButton.addEventListener("click", function(){
	messageDisplay.textContent= "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	if(numSquares === 3){
		squares[3].style.backgroundColor = "#232323";
		squares[4].style.backgroundColor = "#232323";
		squares[5].style.backgroundColor = "#232323";
	}

});

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			 }
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		
		});
	}

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor((Math.random() * colors.length));
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	 return "rgb(" + red + ", " + green + ", " + blue + ")"

}
