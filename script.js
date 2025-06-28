
const container = document.querySelector(".container");
const button = document.querySelector("button");
const input = document.querySelector("input");


button.addEventListener("click", function () {

    gridSize(input.value);
})
function gridSize(len) {
    if (container.hasChildNodes()) {
        container.textContent = "";
        gridSize(len);

    }
    else {
        for (let i = 0; i < len; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < len; j++) {
                const squares = document.createElement("div");
                row.appendChild(squares);
                squares.classList.add("style");
                squares.style.height = (480 / len) + "px";
                squares.style.width = (480 / len) + "px";

            }
            container.appendChild(row);
        }
        container.addEventListener("mouseover", function (e) {
            let target = e.target;
            target.style.background = "red";
            // if (target.dataset.visited == null) {
            //     target.dataset.visited = "true";
            //     target.dataset.opacity = "0.1";
            //     target.style.background = randomColor();
            //     target.style.opacity = +(target.dataset.opacity);
            // }
            // else {
            //     target.style.background = randomColor();
            //     target.dataset.opacity = +(target.dataset.opacity) + 0.1;
            //     target.style.opacity = target.dataset.opacity 
            // }


        })
    }

}

function randomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    return `rgb(${r},${g},${b})`;
}


gridSize(16);