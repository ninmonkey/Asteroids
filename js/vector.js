function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.log = function() {
    console.log(`Vector( ${this.x}, ${this.y} )` );
}
