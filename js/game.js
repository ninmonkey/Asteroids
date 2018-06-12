let canvas = null;
let ctx = null;
let visualDebug = true;
let stats = new Stats();
let asteroids = [];
let ship = null;

function drawScore() {
    ctx.font = "16px arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText("Score: " + 1234, 10, 10);
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    if(visualDebug) {
        document.body.appendChild(stats.dom);
        stats.showPanel(1);
    }

    let x = randomInt(0, canvas.width);
    let y = randomInt(0, canvas.height);
    ship = new Ship(x, y);
    ship.log();

    asteroids = [];
    // for( let i = 0; i < 5; i++ ) {
    // }
}

function loop() {
    let time = performance.now() / 1000;
    stats.begin();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ship.draw();
    drawScore();

    stats.end();
    requestAnimationFrame(loop);
}

// entry point
document.addEventListener('DOMContentLoaded', function() {
    init();
    loop();
}, false);