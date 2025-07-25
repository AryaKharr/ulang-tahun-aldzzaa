const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 200 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 4 + 1,
  d: Math.random() * 50,
  color: `hsl(${Math.random() * 360}, 100%, 50%)`
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += Math.cos(c.d) + 1;
    c.x += Math.sin(c.d);
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(draw);
}
draw();

document.getElementById("giftBtn").onclick = function () {
  document.getElementById("surprise").classList.remove("hidden");
};