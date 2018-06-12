function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.str = function() {
    return `Vector( ${this.x}, ${this.y} )`;
}
