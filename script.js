var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rnd = document.getElementById("rnd");
var rst = document.getElementById("rst");

// console.log(body);
// /*to check if we are selecting body*/


// document.getElementById("gradient").style.background = "red";
// body.style.background = "red";
/*any of thes two will change the color of the body to red*/


// console.log(css);
// console.log(color1);
// console.log(color2); /*to determine whether we have selected the right things*/


// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// })


// color2.addEventListener("input", function(){
// 	console.log(color2.value);
// })/*still checking if it works*/


// color1.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// color2.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// }) /*without the "color" variable*/

function randomColor() {
	var RGBColor1 = "#" + Math.floor(100000 + Math.random() * 900000);
	var RGBColor2 = "#" + Math.floor(100000 + Math.random() * 900000);
	color1.value = RGBColor1;
	color2.value = RGBColor2;
	
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  	addColor();
}

function resetColor(event) {
	body.style.background = "linear-gradient(to right, " + "rgb(19, 87, 118)" + ", " + "rgb(112, 52, 16)" + ")";
	css.textContent = body.style.background + ";";	
	color1.value = "#135776";
	color2.value = "#703410";
}

function addColor(event) {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// window.addEventListener("load", addColor);

color1.addEventListener("input", addColor);

color2.addEventListener("input", addColor);

rnd.addEventListener("click", randomColor);

rst.addEventListener("click", resetColor);