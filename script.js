
const container = document.getElementById('grid-container');
const promptButton = document.getElementById('grid-prompt'); 
const gridSquares = document.createElement('div');
let gridSize = (16 * 16);
let userNumber = 16; 
let lStart = 90;
let colorStart = addColor();

createSquares(gridSize,userNumber);

function createSquares(gridSize,userNumber) {
    for (i = 0; i < gridSize; i++ ) {
        container.appendChild(gridSquares); 
        gridSquares.classList.add('square');
        let squareSize = (960 / userNumber);
        gridSquares.style.width = squareSize + "px";
        gridSquares.style.height = squareSize + "px"; 
        gridSquares.addEventListener('mouseover', () => {
            colorChange(); 
            
        } );
    }
    
};
//need to shade color, not sure if i can do that with hsl, and i cant seem to carry over the values, mouseover listener reruns as new
function colorChange(){
    const h = Math.floor(Math.random() * 360);
    const s = 100 + '%';
    for (i = 90; i > 0; i - 10) {
        let l = i + '%'
        gridSquares.style.backgroundColor = `hsl(${h},${s},${l})`; 
}
};

function addColor (){
    const h = Math.floor(Math.random() * 360);
    const  s  = 100 + '%';
    let l = lStart + '%'; 
    return `hsl(${h},${s},${l})`; 
    };

function changeColor (){
    const h = Math.floor(Math.random() * 360);
    const  s  = 100 + '%';
    if (lStart === 90){
        let l = lStart + '%'; 
        lStart - 10;
        return `hsl(${h},${s},${l})`;  
    } else if (lStart > 0){
        let l = lStart + '%'; 
        lStart - 10;
        return `hsl(${h},${s},${l})`;
    }; 
};
promptButton.addEventListener('click', () => {
    removeSquares(); 
    let userNumber = Number(window.prompt("Pick A Number 100 And Below:"));
while (userNumber < 1) {
    userNumber =Number(window.prompt("Number Must Be Greater Than 0"))
}
while (userNumber > 100) {
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


//let doAction = firstAction; 

//function listenerFunction() {
//    doAction();
//}

//function firstAction() {
//        doAction = secondAction; 
//}

//function secondAction( {
//    doAction = firstAction; 
//})