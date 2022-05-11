
addSquaresToView();
addHoverToSquares();

function addSquaresToView(){
    const mainContainer = document.querySelector(".grid-container");
    let columnContainer = document.createElement("div");
    let square = document.createElement("div");

    generateSquares(mainContainer, columnContainer, square);
}

function generateSquares(mainContainer, columnContainer, square){
    for (let i = 0; i < 16; i++){
        columnContainer = createNewColumn(columnContainer);
        for (let j = 0; j < 16; j++){
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




