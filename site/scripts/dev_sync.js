let generateButton = document.querySelector(".sync");
let outputElement = document.querySelector(".header");

let randomRgba = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = .5;
    let rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    return rgba;
}

let randomGradient = () => {
    let angle = Math.floor(Math.random() * 360);
    let colorOne = randomRgba();
    let colorTwo = randomRgba();
    let colorThree = randomRgba();
    outputElement.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo}, ${colorThree})`;
}

generateButton.addEventListener('mouseover', randomGradient);
generateButton.addEventListener("click", randomGradient);