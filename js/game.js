console.log("done");

let canvas = null;
let ctx = null;
let visualDebug = true;
let stats = new Stats();

function drawShip() {
    ctx.beginPath();
    ctx.rect(100, 100, 100, 100);
    ctx.fillStyle = "#ddd";
    ctx.fill();
    ctx.closePath();
}

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
}

function loop() {
    let time = performance.now() / 1000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stats.begin();

    drawShip();
    drawScore();

    stats.end();

    requestAnimationFrame(loop);
}

// entry point
document.addEventListener('DOMContentLoaded', function() {
    init();
    loop();
}, false);