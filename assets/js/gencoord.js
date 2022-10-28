// P5 js implementation of generalised wheel coordinates

var startx;
var starty;
var startr;
var currx;
var curry;
var currr;

function setup() {
  cc_s(0.5);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  frameRate(30);
  startx = width / 2;
  starty = height / 2;
  startr = 0;
  currx = startx;
  curry = starty;
  currr = startr;
}

function windowResized() {
  cc_s(0.5);
}

function psedoinv(a) {
  let at = math.transpose(a);
  let left = math.multiply(at, a);
  let right = math.multiply(a, at);

  // console.log("a is ", a, " at is ", at, "left is ", left, "right is ", right);
  return math.multiply(at, math.inv(right));
}

class Wheel {
  constructor(
    radius,
    thickness,
    rel_posx,
    rel_posy,
    rel_rotz,
    passive_angle,
    passive_radius
  ) {
    this.radius = radius;
    this.thickness = thickness;
    this.passive_angle = passive_angle;
    this.passive_radius = passive_radius;

    this.rel_posx = rel_posx;
    this.rel_posy = rel_posy;
    this.rel_rotz = rel_rotz;
  }
}

class Body {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.posx = 0;
    this.posy = 0;
    this.rotz = 0;

    this.wheels = [];
    // this.wheelConfigInv = [];
  }

  addWheel(
    radius,
    thickness,
    rel_posx,
    rel_posy,
    rel_rotz,
    passive_angle = null,
    passive_radius = null
  ) {
    this.wheels.push(
      new Wheel(
        radius,
        thickness,
        rel_posx,
        rel_posy,
        rel_rotz,
        (passive_angle = passive_angle),
        (passive_radius = passive_radius)
      )
    );
  }

  drawWheels(wheel, index, wheels_array) {
    translate(wheel.rel_posx, wheel.rel_posy);
    rotate(wheel.rel_rotz);
    ellipse(0, 0, wheel.radius, wheel.thickness);
    rotate(-wheel.rel_rotz);
    translate(-wheel.rel_posx, -wheel.rel_posy);
    // console.log("printed wheel at ", currx);
  }

  draw() {
    fill("green");
    stroke(255);
    strokeWeight(2);
    rect(this.posx, this.posy, this.width, this.height);

    stroke(127);
    fill("pink");

    this.wheels.forEach(this.drawWheels);
    noFill();
  }

  calcWheelConfig() {
    var wheelConfigInv = new math.zeros(this.wheels.length, 3);
    // console.log(wheelConfigInv);
    for (let i = 0; i < this.wheels.length; i++) {
      // console.log("wheel ", i);
      let wheel = this.wheels[i];
      let passive_component = math.matrix([
        1 / wheel.radius,
        math.tan(wheel.passive_angle * (math.pi / 180)) / wheel.radius,
      ]);
      // console.log("Passive comp ", passive_component);

      let wheel_rotation = math.matrix([
        [
          math.cos(wheel.rel_rotz * (math.pi / 180)),
          math.sin(wheel.rel_rotz * (math.pi / 180)),
        ],
        [
          -math.sin(wheel.rel_rotz * (math.pi / 180)),
          math.cos(wheel.rel_rotz * (math.pi / 180)),
        ],
      ]);
      // console.log("wheel rot ", wheel_rotation);

      let wheel_transform = math.matrix([
        [1, 0, -wheel.rel_posy],
        [0, 1, wheel.rel_posx],
      ]);
      // console.log("wheel trans ", wheel_transform);

      let _a = math.multiply(passive_component, wheel_rotation);
      // console.log("_a is ", _a, "wheel transform is ", wheel_transform);
      let _row = math.multiply(_a, wheel_transform);
      // console.log(wheelConfigInv);
      wheelConfigInv.set([i, 0], _row.get([0]));
      wheelConfigInv.set([i, 1], _row.get([1]));
      wheelConfigInv.set([i, 2], _row.get([2]));
    }

    // console.log(wheelConfigInv);
    let W = psedoinv(wheelConfigInv);
    // console.log("W is", W);
    return W;
  }

  calcMotion(omega) {
    let W = this.calcWheelConfig();

    // console.log("omega is ", omega, "w is ", W);
    let vels = math.multiply(W, omega);
    console.log(vels); 

    this.posx += vels.get([0, 0]);
    this.posy += vels.get([1, 0]);
    this.rotz += vels.get([2, 0]);
  }
}

var r = new Body(30, 20);
r.addWheel(16, 10, 0, -10, 0);
r.addWheel(15, 10, 0, 10, 0);

var omega = math.matrix([[0.1], [0.1]]);

let a = math.matrix([1, 2]);

function draw() {
  translate(currx, curry);
  r.draw();

  console.log(r.calcMotion(omega));
  // console.log(psedoinv(a));
}
