var n=6;
 var colors=generaterandomcolors(n); 
var squares=document.querySelectorAll(".squares");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

for(var i=0;i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")n=3;
		else n=6;
		reset1();
	});
}
function reset1()
{
	colors=generaterandomcolors(n);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	reset.textContent="New colors";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
		
	h1.style.backgroundColor="steelblue";
	messagedisplay.textContent=" ";
}
}
reset.addEventListener("click",function(){

	reset1();
});

colordisplay.textContent=pickedcolor;
for(var i=0;i< squares.length ;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;

		if(clickedcolor===pickedcolor)
		{
			changecolor(clickedcolor);
			messagedisplay.textContent="Correct";
			h1.style.backgroundColor=clickedcolor;
			reset.textContent="Play Again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try Again";
		}
	});
}
function changecolor(color) {
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}
function pickcolor() {
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolors(num){
	var arr=[];

	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}

	return arr;
}
function randomcolor(){

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}