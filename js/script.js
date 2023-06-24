const CONTAINER = document.querySelector(".container");
const NEWGRIDBUTTON = document.querySelector("#newGrid");


function clearGrid(){
    while(CONTAINER.firstChild){
        CONTAINER.lastChild.remove();
    }
}

function newGrid(scale){
    let gap = (scale <60) ? 2:1;
    for(let y=0;y<scale;y++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.cssText += `gap:${gap}px;padding-left:${gap}px;padding-right:${gap}px;`;
        for(let x=0;x<scale;x++){
            let cell = document.createElement("div");
            let cellWidth = (CONTAINER.clientWidth - scale*gap)/scale;
            let cellHeight = (CONTAINER.clientHeight - scale*gap)/scale;
            cell.classList.add("cell");
            cell.style.cssText += ` height:${cellHeight}px; width: ${cellWidth}px; margin-top:${gap}px`; 
            if(y === (scale-1)){
                cell.style.cssText += `margin-bottom:${gap}px;`;
            }
            row.appendChild(cell);
            cell.addEventListener("mouseenter", ()=>{                
                cell.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            });            
        }
        
        CONTAINER.appendChild(row);
    }
   
}

NEWGRIDBUTTON.addEventListener("click", ()=>{
    let scale = parseInt(prompt("enter scale of grid (max: 100)", "16"));
    if(isNaN(scale) || scale === 0 || scale > 100){
         alert("Invalid number");
    }else{
     clearGrid();
     newGrid(scale);
    }
    
 });

newGrid(16);



