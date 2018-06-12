function Ship(x, y) {
    this.x = x;
    this.y = y;
}

Ship.prototype.log = function() {
    console.log(`Ship( ${this.x}, ${this.y} )` );
}

Ship.prototype.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, 100, 100);
    ctx.fillStyle = "#ddd";
    ctx.fill();
    ctx.closePath();
}