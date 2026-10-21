// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Keep the footer year current
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
