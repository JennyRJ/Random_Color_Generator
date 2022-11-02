const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorE1 = document.createElement("div");
    colorE1.classList.add("color");
    containerE1.appendChild(colorE1);
}
const colorContainerE1 = document.querySelectorAll(".color");
colorGenerator();

function colorGenerator() {
    colorContainerE1.forEach((colorE1) => {
        const newColor = randomColor();
        colorE1.style.backgroundColor = "#" + newColor;
        colorE1.innerText = "#" + newColor;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorr = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorr += chars.substring(randomNumber, randomNumber + 1);
    }
    return colorr;
}