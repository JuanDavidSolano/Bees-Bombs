let angle = 0;
let w = 30;
let ma
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {

  background(100);
  ortho(-500, 500, 500, -500, 0, 1500);

  translate(100, 100, -50);
  rotateX(ma);
  rotateY(-QUARTER_PI);


  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 2, maxD, -PI, PI);
      push();
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z);
      normalMaterial();
      box(w - 2, h, w - 2);
      pop();
    }
  }
  angle -= 0.07;

}
