// initial grid size 
//let gridSize = 5;

const gridDiv = document.createElement('div');

let clearBtn = document.querySelector('.clearBtn');
let changeGridSizeBtn = document.querySelector('.changeGridSizeBtn');
//buttons.classList.add('buttons');

gridDiv.classList.add('gridDiv');
container.appendChild(gridDiv);
let gridSizeVariable = document.getElementsByName("gridSizeSelect")[0].value;


// Design Change --> Create all necessary buttons in html, select and modify them as necessary here
// create the Clear button and make it functional

clearBtn.addEventListener('click', clearGrid); 
changeGridSizeBtn.addEventListener('click', changeGridSize);

// This Javascript will create a grid of divs and will allow a user to draw in it with different colors
function generateDivs() {
    let selectGrid = document.querySelector(".gridDiv");
    
    for (let i = 0; i < gridSizeVariable; i++) {
        let row = document.createElement('div'); // every time i increments, create a new div called row
        row.classList.add("row");
        for (let x = 1; x <= gridSizeVariable; x++) {
            let cell = document.createElement("div"); // every time x increments, create a new cell within the row i
            cell.classList.add("gridSquare");
            cell.addEventListener('mouseover', changeColor); // create eventListener for each cell
            //cell.innerText = (i * gridSize) + x; // remove, this is a counter for how many cells created
            row.appendChild(cell); // add to the row
        }
        gridDiv.appendChild(row); // add the completed row to the container
    }
    // this line displayed the actual HTML that was injected by the JS. Not Pretty!
    // document.getElementById("container").innerText = e.innerHTML;
}

// create a function to change the color of an individual cell within a row div, eventListener 'mouseover'
function changeColor(event) {
    // fancy code creation by people way knowledgable than I, -- https://www.paulirish.com/2009/random-hex-color-code-snippets/
    let color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'); // slightly modified, to ensure a hexcode that is 6 figures long
    let colorChange = document.getElementsByClassName('cell');
    event.target.style.backgroundColor = color; // event.target to specify exactly where the color needs to be sent. Line below never sent the color to an exact location 
    //colorChange.style.backgroundColor = color; // typeError -- this is undefined ??
}

function clearGrid() {
    gridDiv.innerHTML = "";
    generateDivs();
    console.log('this was clicked');
}

function changeGridSize() { // changes grid size on refresh, not on click
    gridDiv.innerHTML ="";
    generateDivs();
    console.log(gridSizeVariable);
}

//container.appendChild(buttons);
generateDivs();

