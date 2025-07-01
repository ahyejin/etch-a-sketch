const sketchpad = document.querySelector(".sketchpad");
const gridSize = document.querySelector("#gridSize");
gridSize.addEventListener("input", function (e) {
    createGrid(e.target.value);
})
const color = document.querySelector("#color");
const multicolor = document.querySelector(".multicolor");

let randomColorFlag = false;
let shading = false;
let eraser = false;
let isClear = false;

color.addEventListener("input", function (e) {
    buttons.forEach(item => item.style.background = "#edede9");
    randomColorFlag = false;
    shading = false;
    eraser = false;

})
const buttons = document.querySelectorAll("button");

buttons.forEach(item => item.addEventListener("click", function (e) {
    buttons.forEach(item => item.style.background = "#edede9");
    e.target.style.background = "#a8dadc";
    if (e.target.textContent == "Multicolor") {
        randomColorFlag = true;
        eraser = false;
        shading = false;
    }
    else if (e.target.textContent == "Shading") {
        shading = true;
        randomColorFlag = false;
        eraser = false;
    }
    else if (e.target.textContent == "Eraser") {
        eraser = true;
        randomColorFlag = false;
        shading = false;
    }
    else if (e.target.textContent == "Clear") {
        randomColorFlag = false;
        shading = false;
        eraser = false;
        createGrid(gridSize.value);
    }

}))
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
                if (randomColorFlag) {
                    e.target.style.background = randomColor();
                    e.target.style.opacity = 1;
                }
                else if (eraser) {
                    e.target.style.background = "#ecf39e";
                    e.target.style.opacity = 1;
                }
                else if (shading) {
                    let target = e.target;
                    target.style.background = color.value;
                    if (target.dataset.visited == null) {
                        target.dataset.visited = "true";
                        target.dataset.opacity = "0.1";
                        target.style.opacity = +(target.dataset.opacity);
                    }
                    else {
                        target.dataset.opacity = +(target.dataset.opacity) + 0.1;
                        target.style.opacity = target.dataset.opacity
                    }
                }
                else {
                    buttons.forEach(item => item.style.background = "#edede9");
                    e.target.style.background = color.value;
                }

            })
        }
        sketchpad.appendChild(rows);
    }

}
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;

}
createGrid(16);




