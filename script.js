const cursor = document.getElementById('custom-cursor');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Lerp para suavizar movimento do cursor
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;
  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';
  requestAnimationFrame(animate);
}

animate();

// Cursor muda ao passar sobre botões
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });
  btn.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});
