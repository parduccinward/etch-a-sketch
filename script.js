let defaultGridSize = 16;

addSquaresToView(defaultGridSize);
addHoverToSquares();
addNewGridButton();


function addSquaresToView(gridSize){
    const mainContainer = document.querySelector(".grid-container");
    let columnContainer = document.createElement("div");
    let square = document.createElement("div");

    generateSquares(mainContainer, columnContainer, square, gridSize);
}

function generateSquares(mainContainer, columnContainer, square, gridSize){
    for (let i = 0; i < gridSize; i++){
        columnContainer = createNewColumn(columnContainer);
        for (let j = 0; j < gridSize; j++){
            square = generateSquareAtColumn(square,columnContainer);
        }
        generateColumnAtContainer(columnContainer,mainContainer);
    }
}

function generateSquareAtColumn(square,columnContainer){
    createSquareContent(square);
    columnContainer.appendChild(square);
    return square = createNewSquare(square);
}

function generateColumnAtContainer(columnContainer,mainContainer){
    createColumnContent(columnContainer);
    mainContainer.appendChild(columnContainer);
}

function createColumnContent(columnContainer){
    columnContainer.classList.add("column-container");
}

function createSquareContent(square){
    square.classList.add("square");
}

function createNewColumn(columnContainer){
    return columnContainer = document.createElement("div");
}

function createNewSquare(square){
    return square = document.createElement("div");
}


function addHoverToSquares(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover",hoverElement)
    });
}

function hoverElement(e){
    e.target.classList.add("hover");  
}

function addNewGridButton(){
    const btn = document.querySelector(".new-grid-btn");
    btn.addEventListener("click",createNewGrid);
}

function createNewGrid(){
    let newGrid = showNewGridPrompt();
    if (checkGridRange(newGrid) === false){
        alert("Please select a valid range grid!");
        createNewGrid();
    }else{
        addNewGridToWindow(newGrid);
    }
}

function showNewGridPrompt(){
    return Number(prompt("What is the grid size? (Must be between 2 and 99)"));
}

function checkGridRange(newGrid){
    return (newGrid<=1 || newGrid>=100) ? false : true;
}

function addNewGridToWindow(newGrid){
    deleteOldGrid();
    addSquaresToView(newGrid);
    addHoverToSquares();
}

function deleteOldGrid(){
    const oldGrid = document.querySelector(".grid-container");
    oldGrid.remove();
    restartGrid();
}

function restartGrid(){
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    const body = document.querySelector("body");
    body.appendChild(gridContainer);
}
