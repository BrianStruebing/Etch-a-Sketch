// Setting the Defaults
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


function setCurrentMode(newMode){
    activeButton(newMode)
    currentMode = newMode
}

function setCurrentColor(newColor) {
    currentColor = newColor
  }




// Creating and selecting all the DOM elements we need
const mainDiv = document.querySelector("main");
const grid = document.getElementById("grid")
const gridDiv = document.querySelector(".gridDiv");
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

// Function sets up the grid by looking for the "size" value.
// Then gives each element of that grid an evenlistener that changes the color of the given element
function setupGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor)
        grid.appendChild(gridElement)
    }
}


setupGrid(currentSize)


// Changes the colors based on what mode is selected. 
function changeColor(e) {
    
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      // Sets the color to the color selected with the colorpicker
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

function activeButton (newMode){
    
    if (currentMode === "rainbow"){
        rainbowBtn.classList.remove("active")
    } else if (currentMode === "color"){
        colorBtn.classList.remove("active")
    } else if (currentMode === "eraser"){
        eraseBtn.classList.remove("active")
    } 



    if (newMode === "rainbow"){
        rainbowBtn.classList.add("active")
    } else if (newMode === "color"){
        colorBtn.classList.add("active")
    } else if (newMode === "eraser"){
        eraseBtn.classList.add("active");
    }
}
  

// Simply reloades the game     
function reloadGrid(){
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid(){
    grid.innerHTML = "";
}

console.log(currentMode);
