
const container = document.getElementById('grid-container');
const promptButton = document.getElementById('grid-prompt'); 
let gridSize = (16 * 16);
let userNumber = 16; 

createSquares(gridSize,userNumber);

function createSquares(gridSize,userNumber) {
    for (i = 0; i < gridSize; i++ ) {
        const gridSquares = document.createElement('div');
        container.appendChild(gridSquares); 
        gridSquares.classList.add('square');
        let squareSize = (960 / userNumber);
        gridSquares.style.width = squareSize + "px";
        gridSquares.style.height = squareSize + "px"; 
        gridSquares.addEventListener('mouseover', () => {
            gridSquares.style.backgroundColor = 'red'; 
        } );
    }
    
};

promptButton.addEventListener('click', () => {
    removeSquares(); 
    let userNumber = Number(window.prompt("Pick A Number 100 And Below:"));
if (userNumber > 100) {
    userNumber = Number(window.prompt("Number Must Be 100 Or Less!"));
}
    let gridSize = (userNumber * userNumber); 
    createSquares(gridSize, userNumber); 
});

function removeSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};
