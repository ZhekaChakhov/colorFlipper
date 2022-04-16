"use strict"

let button = document.querySelector("button");
let main = document.querySelector("main");
let span = document.querySelector("#spanColor");

button.addEventListener("click", () => {
	let r = getRandom(0, 256);
	let g = getRandom(0, 256);
	let b = getRandom(0, 256);

	let color = rgbToHex(r, g, b);

	main.style.backgroundColor = color;
	span.innerHTML = color.toUpperCase();
}); 


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}