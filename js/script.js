const CONTAINER = document.querySelector(".container");


function initialize(){
    for(let y=0;y<16;y++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let x=0;x<16;x++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            cell.addEventListener("mouseenter", ()=>{
                // cell.classList.replace("cell","cell-changed");
                cell.style.background = "blue";
            });            
        }
        CONTAINER.appendChild(row);
    }
}

function newGrid(scale){
    for(let y = 0; y<scale;y++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let x =0; x<scale; x++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", ()=> {
                cell.style.background = "blue";
            });
        }
    }
}

initialize();



