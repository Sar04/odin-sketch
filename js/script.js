const CONTAINER = document.querySelector(".container");
const NEWGRIDBUTTON = document.querySelector("#newGrid");

function getRgbValuesFromString(rgbString){
    let rgbValue = rgbString;
    let splitRGB = rgbValue.split(",");
    let r = splitRGB[0].split('(');
    r = r[1];
    let g = splitRGB[1].trim();
    let b = splitRGB[2].trim();
    b = b.replace(')', '');
    let rgb = [r,g,b];
    return rgb;
}

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
                if(cell.classList.contains("changed")){
                    let rgb = getRgbValuesFromString(cell.style.background);
                    let change = getRgbValuesFromString(cell.style.color);

                    cell.style.background = `rgb(${rgb[0]-change[0]},${rgb[1]-change[1]},${rgb[2]-change[2]})`;
                }else{
                    cell.classList.add("changed");

                    let a = Math.floor(Math.random()*255);
                    let b = Math.floor(Math.random()*255);
                    let c = Math.floor(Math.random()*255);

                    cell.style.background = `rgb(${a},${b},${c})`;
                    cell.style.color = `rgb(${a/9},${b/9},${c/9})`;
                }
                
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





