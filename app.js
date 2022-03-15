// Setting the Defaults
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


function setCurrentMode(newMode){
    currentMode = newMode
}

function setCurrentColor(newColor) {
    currentColor = newColor
  }




// Creating and selecting all the DOM elements we need
const mainDiv = document.querySelector("main");
// const controlDiv = document.createElement("div");
const grid = document.getElementById("grid")
const gridDiv = document.querySelector(".gridDiv")
// const testHeading = document.createElement("h1");
const clearBtn = document.getElementById("clearBtn");
const eraseBtn = document.getElementById("eraserBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const colorBtn = document.getElementById("colorBtn"); 
const colorPicker = document.getElementById("colorPicker");


colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");       
eraseBtn.onclick = () => setCurrentMode("eraser");
clearBtn.onclick = () => reloadGrid();
colorPicker.onchange = (e) => setCurrentColor(e.target.value);

// testHeading.textContent = "Hello";


// controlDiv.classList.add("controlDiv");

// controlDiv.appendChild(testHeading);
// mainDiv.appendChild(controlDiv);


function setupGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < 256; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor)
        grid.appendChild(gridElement)
    }
}


setupGrid(currentSize)

function changeColor(e) {
    
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }
  
function reloadGrid(){
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid(){
    grid.innerHTML = "";
}
