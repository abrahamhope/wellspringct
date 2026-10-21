// Paste your Zeffy donation page link here to show the Donate links across the site.
// Example: const ZEFFY_URL = 'https://www.zeffy.com/en-US/donation-form/your-form';
const ZEFFY_URL = '';

if (ZEFFY_URL) {
  document.querySelectorAll('[data-donate]').forEach((el) => {
    el.hidden = false;
    el.querySelectorAll('a').forEach((a) => { a.href = ZEFFY_URL; });
  });
}

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
