const greeting = document.getElementById("greeting");
const biggerBtn = document.getElementById("biggerBtn");
const smallerBtn = document.getElementById("smallerBtn");

let currentSize = 24; // starting font size in pixels

biggerBtn.addEventListener("click", () => {
  currentSize += 4;
  greeting.style.fontSize = currentSize + "px";
});

smallerBtn.addEventListener("click", () => {
  currentSize -= 4;
  if (currentSize < 8) currentSize = 8; // minimum size
  greeting.style.fontSize = currentSize + "px";
});
