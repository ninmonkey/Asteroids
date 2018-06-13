function Asteroid(x, y) {
    x = x || randomInt(0, canvas.width);
    y = y || randomInt(0, canvas.height);
    this.loc = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.color = "#444";
    this.radius = 40;
}

Asteroid.prototype.log = function() {
    let loc = this.loc.toString();
    let vel = this.vel.toString();
    console.log(`Asteroid( loc=${loc}, vel=${vel} )`)
}

Asteroid.prototype.draw = function() {
    let x = this.loc.x;
    let y = this.loc.y;

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#999';
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
        this.loc.x,
        this.loc.y,
        this.radius,
        0,
        2 * Math.PI,
    );

    ctx.stroke();
    ctx.fill();
}