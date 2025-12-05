// Простая анимация заголовка — лёгкая пульсация
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
  let t = 0;
  setInterval(() => {
    t += 0.05;
    heroTitle.style.transform = `scale(${1 + Math.sin(t) * 0.02})`;
  }, 30);
}
