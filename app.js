
// Creating and selecting all the DOM elements we need
const mainDiv = document.querySelector("main");
const controlDiv = document.createElement("div");
const gridDiv = document.createElement("div");
const testHeading = document.createElement("h1");



testHeading.textContent = "Hello";


controlDiv.classList.add("controlDiv");

controlDiv.appendChild(testHeading);
mainDiv.appendChild(controlDiv);