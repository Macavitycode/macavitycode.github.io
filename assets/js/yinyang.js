function setup() {
  cc_s(0.5);
  angleMode(DEGREES);

}

var pos = 0;
var speed = 0.5;
var big_rad = 250;
var small_rad = big_rad/2;
var tiny_rad = big_rad/6;

function windowResized() {
  cc_s(0.5);
}

function draw() {

    ellipseMode(CENTER);
    translate(width / 2, height / 2);
    rotate(pos);
    fill('white');
    ellipse(0, 0, big_rad, big_rad);
    
    fill('black');
    arc(0, 0, big_rad, big_rad, 0, 180);
    arc(0 - big_rad/2 + small_rad/2, 0 + 1, small_rad, small_rad + 1, 180, 0);

    fill('white');
    arc(0 + big_rad/2 - small_rad/2, 0 - 1, small_rad, small_rad + 1, 0, 180);
    ellipse(0 - big_rad/2 + small_rad/2, 0, tiny_rad, tiny_rad);
    
    fill('black');
    ellipse(0 + big_rad/2 - small_rad/2, 0, tiny_rad, tiny_rad);
    
    pos += speed;
}
