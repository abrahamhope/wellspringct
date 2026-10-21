// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Sub-menus: the arrow button opens/closes; only one open at a time
const subItems = document.querySelectorAll('.has-sub');
const closeSub = (item) => {
  item.classList.remove('open');
  item.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
};
subItems.forEach((item) => {
  const btn = item.querySelector('.sub-toggle');
  btn.addEventListener('click', () => {
    const open = !item.classList.contains('open');
    subItems.forEach((other) => { if (other !== item) closeSub(other); });
    item.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', (e) => {
  subItems.forEach((item) => { if (!item.contains(e.target)) closeSub(item); });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  subItems.forEach((item) => {
    if (item.classList.contains('open')) {
      closeSub(item);
      if (item.contains(document.activeElement)) item.querySelector('.sub-toggle').focus();
    }
  });
});
// Close the phone menu after jumping to a section on the same page
links?.querySelectorAll('.sub a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    subItems.forEach(closeSub);
  });
});

// Keep the footer year current
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
