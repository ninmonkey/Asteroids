function Ship(x, y) {
    this.loc = new Vector(x, y);
    this.vel = new Vector(0, 0);
}

Ship.prototype.log = function() {
    let loc = this.loc.str();
    let vel = this.vel.str();
    console.log(`Ship( loc=${loc} vel=${vel} )`)
}

Ship.prototype.draw = function() {
    let x = this.loc.x;
    let y = this.loc.y;

    ctx.beginPath();
    ctx.rect(x, y, 100, 100);
    ctx.fillStyle = "#ddd";
    ctx.fill();
    ctx.closePath();
}