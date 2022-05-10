
// column j row i
// row creation is a container. each column is a div. each
// append row-container to grid-container

addSquaresToView();

function addSquaresToView(){
    const mainContainer = document.querySelector(".grid-container");
    let rowContainer = document.createElement("div");
    let square = document.createElement("div");

    for (let i = 0; i < 16; i++){
        rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < 16; j++){
            square = generateSquareAtRow(square,j,rowContainer);
        }
        mainContainer.append(rowContainer);
    }
}

function generateSquareAtRow(square,j,rowContainer){
    createSquareContent(square,j);
    rowContainer.appendChild(square);
    return square = createNewSquare(square);
}


function createSquareContent(square,j){
    square.classList.add("square");
    square.textContent =j;
}

function createNewSquare(square){
    return square = document.createElement("div");
}