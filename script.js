
const container = document.getElementById('grid-container');
let gridSize = (16 * 16);




function createSquares(gridSize) {
    for (i = 0; i < gridSize; i++ ) {
        const gridSquares = document.createElement('div');
        container.appendChild(gridSquares); 
        gridSquares.classList.add('square');
        gridSquares.textContent = i; 
        gridSquares.addEventListener('mouseover', () => {
            gridSquares.style.backgroundColor = 'red'; 
        } );
    }
    
   
}

createSquares(gridSize);