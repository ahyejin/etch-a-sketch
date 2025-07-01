const sketchpad = document.querySelector(".sketchpad");
const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener("input", function (e) {
    createGrid(e.target.value);
})
const color = document.querySelector("#color");
function createGrid(size) {
    if (sketchpad.hasChildNodes()) {
        sketchpad.textContent = "";
    }
    for (let i = 0; i < size - 1; i++) {
        const rows = document.createElement("div");
        for (let j = 0; j < size / 2 - 1; j++) {
            const squares = document.createElement("div");
            squares.style.height = (1100 / size) + "px";
            squares.style.width = (1100 / size) + "px"
            rows.appendChild(squares);
            squares.classList.add("columns");
            squares.addEventListener("mouseover", function (e) {
                    e.target.style.background = color.value;
            })
        }
        sketchpad.appendChild(rows);
    }
    
}

createGrid(16);




