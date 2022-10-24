function setup() {
  cc_s(0.5);
}
  
function windowResized() {
  cc_s(0.5);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}