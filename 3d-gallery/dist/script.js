var box = document.getElementById("box");

var deg = 0;

function left() {
  deg += 45;
  box.style.transform = "translateZ(500px) rotateY("+deg+"deg)";
}
function right() {
  deg -= 45;
  box.style.transform = "translateZ(500px) rotateY("+deg+"deg)";
}