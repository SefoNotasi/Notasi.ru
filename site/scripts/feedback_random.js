let outputElement = document.querySelector("body");

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

window.onload = randomGradient;

let reviews = document.getElementsByClassName("review");
// console.log("Reviews: " + reviews + "\nReviews count: " + reviews.length);

function getReview() {
    let index = Math.floor(Math.random() * reviews.length); // reviews.length + 1);
    let tag = `<a href=\"${index}.png\" title=\"Случайный отзыв\"><img src=\"${index}.png\" alt=\"Отзыв ${index}\"></a>`;
    return tag;
}

let review = getReview();
// console.log("Review: " + review);

var node = document.getElementById("header");
node.innerHTML = review;

document.querySelector(".count").innerHTML = reviews.length;