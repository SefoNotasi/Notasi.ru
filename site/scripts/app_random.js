var coin = document.querySelector(".logo");
coin.addEventListener('click', flipIn);
var sides = [
  '/site/design/app_heads.png',
  '/site/design/app_tails.png',
  '/site/design/app_edge.png'
];

function flipIn() {
  coin.classList.remove("flip-out");
  coin.classList.add("flip-in");

  // Add listener to the "transitionend" event.
  coin.addEventListener("transitionend", function transition() {
    // Remove the previously added listener,
    // change the image and flip-out the new image.
    coin.removeEventListener("transitionend", transition);
    changeSide();
    flipOut();
  });
}

function changeSide() {
  var side;
  if (coin.getAttribute('src') == "/site/design/app_edge.png") {
    side = sides[Math.floor(Math.random() * (sides.length - 1))];
  } else {
    side = sides[Math.floor(Math.random() * sides.length)];
  }
  coin.src = side;
}

function flipOut() {
  coin.classList.remove("flip-in");
  coin.classList.add("flip-out");
}
