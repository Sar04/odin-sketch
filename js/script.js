const CONTAINER = document.querySelector(".container");

function initialize(){
    for(let y=0;y<16;y++){
        let row = document.createElement("div");
        console.log(row);
        row.style.cssText = "display: flex; gap: 10px; background-color: green; margin-bottom: 10px;justify-content: space-evenly; align-items: center;"
        for(let x=0;x<16;x++){
            let cell = document.createElement("div");
            cell.style.cssText = "height:100px; width: 100px; background-color: red; margin-bottom: 10px; margin-top: 10px"
            row.appendChild(cell);
            
        }
        CONTAINER.appendChild(row);
    }
}

initialize();

