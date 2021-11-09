// Bubbles by Mr. V

// Initialize canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let bubble = new Bubble(400, 300);
let bubble2 = new Bubble(100, 300);
let bubble3 = new Bubble(600, 300);

// Main Draw Loop
requestAnimationFrame(draw);
function draw() {
  // Move Bubble
  bubble.move();
  bubble2.move();
  bubble3.move();

  // Fill Canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Bubble
  bubble.draw();
  bubble2.draw();
  bubble3.draw();

  // Loop draw function
  requestAnimationFrame(draw);
}

// Event Listener
document.addEventListener("click", teleport);

function teleport() {
  bubble.relocate(randomInt(0, cnv.width), randomInt(0, cnv.height));
  bubble2.relocate(400, 300);
}
