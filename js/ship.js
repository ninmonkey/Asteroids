function Ship(x, y) {
    x = x || randomInt(0, canvas.width);
    y = y || randomInt(0, canvas.height);
    this.width = 40;
    this.height = 40;
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
    let w = this.width;
    let h = this.height;

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = "#ddd";
    ctx.fill();
    ctx.closePath();
}