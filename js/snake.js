// Snake object
function Snake() {
  // some starting parameters
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  // snake hungry, snake eats. Detects if the head of our snake is in the same position as the food chunk
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  // this function takes in x,y parameters returned from ARROW keyPressed() function
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // detects whatever the snake's head collide with it's tail
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  // updates the snake's state
  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        // we're moving the last elem in the array into prev index
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    // snake position update function
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    // this will keep the snake inside the canvas element
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);

  }

  // this function will draw the snake a noveau each time it's position is recalculated
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  }
}