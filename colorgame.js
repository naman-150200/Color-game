var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var Easy = false;

easyBtn.addEventListener("click",function() {
	Easy =  true;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	reset();
	// colors = generateRandomColors(3);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// for(var i = 0;i < squares.length;i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	for(var i = 3;i < 6;i++){
		squares[i].style.display = "none";
	}

});

hardBtn.addEventListener("click",function() {
	Easy = false;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	for(var i = 3;i < 6;i++){
		squares[i].style.display = "block";
	}	
	reset();
});


resetButton.addEventListener("click", function(){
	reset();
});
 

function reset() {
	resetButton.textContent = "NEW colors";
	messageDisplay.textContent = "";
	h1.style.background = "steelblue";
	var totalSquare = 6;
	if(Easy) totalSquare = 3;
	colors = generateRandomColors(totalSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < colors.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	
}
colorDisplay.textContent = pickedColor; 

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{ 
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color) {
	for(var i =0;i < squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
	var colors = [];
	for(var i =0; i < num;i++){
		colors.push(randomColor());
	}
	return colors;
}

function randomColor() {
	var red,green,blue;
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	return ("rgb(" + red +", " + green + ", " + blue + ")");
}
