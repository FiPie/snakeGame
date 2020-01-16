function Snake() {
  // some starting parameters
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  // this function takes in x,y parameters returned from ARROW keyPressed() function
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }

  // snake position refreshing function
  this.update = function() {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    // this will keep the snake inside the canvas element
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  // this function will draw the snake a noveau each time it's position is recalculated
  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);

  }
}