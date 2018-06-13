function Vector(x, y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.toString = function() {
    return `Vector( ${this.x}, ${this.y} )`;
};

Vector.prototype.setRandomDir = function(magnitude) {
    // random vector of magnitude
    throw 'NotImplementedError';
    magnitude = magnitude || 1;
};

Vector.prototype.multiplyScalar = function(scalar) {
    // vector addition
    this.x *= scalar;
    this.y *= scalar;
};

Vector.prototype.getDirection = function () {
    return Math.atan2(this.y, this.x);
};

Vector.prototype.getMagnitude = function() {
    return Math.sqrt(
        this.x * this.x,
        this.y * this.y,
    );
};

Vector.prototype.setMagnitude = function() {
    throw 'NotImplementedError';
};

Vector.prototype.add = function(other) {
    // vector addition
    this.x += other.x;
    this.y += other.y;
};

Vector.prototype.sub = function(other) {
    // vector subtraction
    this.x -= other.x;
    this.y -= other.y;
};

Vector.prototype.normalize = function() {
    throw 'NotImplementedError';
};

function radian2degrees(rad) {
    return rad * degrees;
}

function degrees2radian(deg) {
    return deg / degrees;
}