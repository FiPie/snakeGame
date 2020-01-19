// This code is a result of Daniel Schiffman's tutorial, he's a great explainer!

var s; // snake object
var scl = 20; // the scale of our snake
var food;
//Initial Setup, this function fires once at the begining in p5.js framwork and executes whatever code is inside the block
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(8); // game speed
  pickLocation();
}

// spawns new food for snake to eat
function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  // preventing new food from appearing on the snake
  for (var i = 0; i < s.tail.length; i++) {
    var pos = s.tail[i];
    var d1 = dist(food.x, food.y, pos.x, pos.y); // snake's tail position
    var d2 = dist(food.x, food.y, s.x, s.y); // snake's head position
    if (d1 < 1 || d2 < 1) {
      console.log('food spawned on snake, restarting food');
      food = 0;
      pickLocation();
    }
  }
}
// in p5.js this function is called in loop
function draw() {
  background(51);
  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

// detects input from user and prevents backward movement of the snake
function keyPressed() {
  if (keyCode === UP_ARROW && (s.xspeed !== 0 && s.yspeed !== 1)) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && (s.xspeed !== 0 && s.yspeed !== -1)) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && (s.xspeed !== -1 && s.yspeed !== 0)) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && (s.xspeed !== 1 && s.yspeed !== 0)) {
    s.dir(-1, 0);
  }
}

// function mouseClicked() {
//   pickLocation();
// }