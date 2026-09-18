const balloon = document.getElementById("balloon");

const originalSize = 200;
const maxSize = 420;
const growSize = 10;
const shrinkSize = 5;

let size = originalSize;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

balloon.addEventListener("click", function () {
    size += growSize;

    colorIndex = (colorIndex + 1) % colors.length;

    balloon.style.backgroundColor = colors[colorIndex];

    if (size > maxSize) {
        size = originalSize;
        colorIndex = 0;

        balloon.style.backgroundColor = colors[colorIndex];

        balloon.classList.add("explode");

        setTimeout(() => {
            balloon.classList.remove("explode");
        }, 200);
    }

    updateBalloonSize();
});

balloon.addEventListener("mouseleave", function () {
    size -= shrinkSize;

    if (size < originalSize) {
        size = originalSize;
    }

    updateBalloonSize();
});


function updateBalloonSize() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
}
