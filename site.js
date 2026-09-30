/* Progressive enhancement: content and native FAQ work without JavaScript. */
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const ease = 'cubic-bezier(.22, 1, .36, 1)';
const activeAnimations = new Set();
function animate(element, frames, options) {
  if (motionPreference.matches) return null;
  const animation = element.animate(frames, options);
  activeAnimations.add(animation);
  animation.finished.then(() => activeAnimations.delete(animation), () => activeAnimations.delete(animation));
  return animation;
}
motionPreference.addEventListener('change', () => {
  if (motionPreference.matches) activeAnimations.forEach(animation => animation.finish());
});
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
function setMenu(open, returnFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('is-open', open);
  if (open) animate(menu, [{opacity: .4, transform: 'translateY(-6px)'}, {opacity: 1, transform: 'none'}], {duration: 180, easing: ease});
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
matchMedia('(min-width: 768px)').addEventListener('change', () => setMenu(false));
document.querySelectorAll('.faq-item').forEach(item => {
  const summary = item.querySelector('summary');
  let transition = null;
  let expanded = item.open;
  summary.setAttribute('aria-expanded', String(expanded));
  summary.addEventListener('click', event => {
    event.preventDefault();
    const start = item.getBoundingClientRect().height;
    expanded = !expanded;
    item.dataset.expanded = String(expanded);
    summary.setAttribute('aria-expanded', String(expanded));
    if (transition) { transition.cancel(); transition = null; }
    item.style.height = '';
    item.style.overflow = '';
    if (motionPreference.matches) { item.open = expanded; return; }
    item.open = true;
    const border = parseFloat(getComputedStyle(item).borderTopWidth) + parseFloat(getComputedStyle(item).borderBottomWidth);
    const end = expanded ? item.getBoundingClientRect().height : summary.getBoundingClientRect().height + border;
    item.style.overflow = 'hidden';
    const current = animate(item, [{height: `${start}px`}, {height: `${end}px`}], {duration: 280, easing: ease});
    transition = current;
    current.onfinish = () => {
      if (transition !== current) return;
      item.open = expanded;
      item.style.height = '';
      item.style.overflow = '';
      transition = null;
    };
  });
});
/* A single visit and a new stamp: a short story, played once in view. */
function playScene(scene) {
  if (motionPreference.matches) return;
  if (scene.dataset.scene === 'hero') {
    animate(scene.querySelector('.visit-ticket'), [
      {transform: 'translateY(18px) rotate(-5deg)', opacity: .45},
      {transform: 'translateY(-3px) rotate(-2deg)', opacity: 1, offset: .78},
      {transform: 'rotate(-2deg)', opacity: 1}
    ], {duration: 680, easing: ease, delay: 180});
  } else {
    animate(scene.querySelector('.scan-line'), [
      {transform: 'translateY(0)', opacity: 0},
      {transform: 'translateY(4px)', opacity: 1, offset: .12},
      {transform: 'translateY(145px)', opacity: 1, offset: .82},
      {transform: 'translateY(153px)', opacity: 0}
    ], {duration: 850, easing: 'ease-in-out'});
    animate(scene.querySelector('.stamp-new'), [
      {background: '#fff', transform: 'scale(.85)'},
      {background: '#f4b512', transform: 'scale(1.15)', offset: .7},
      {background: '#f4b512', transform: 'scale(1)'}
    ], {duration: 360, delay: 650, easing: ease});
    animate(scene.querySelector('.reward-ticket'), [
      {transform: 'translateY(14px) rotate(0)', opacity: .45},
      {transform: 'translateY(-2px) rotate(2deg)', opacity: 1, offset: .8},
      {transform: 'rotate(2deg)', opacity: 1}
    ], {duration: 520, delay: 850, easing: ease});
  }
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { observer.unobserve(entry.target); playScene(entry.target); }
  }), {threshold: .3});
  document.querySelectorAll('[data-scene]').forEach(scene => observer.observe(scene));
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) activeAnimations.forEach(animation => animation.finish());
});

/* Requested continuous logo reel. A real list remains usable without motion or JS. */
const clients = document.querySelector('.clients-section');
if (clients) {
  const pause = clients.querySelector('.carousel-pause');
  const viewport = clients.querySelector('.clients-viewport');
  let userPaused = false;
  let inView = false;
  let hovered = false;
  let focused = false;
  function syncClients() {
    const reduced = motionPreference.matches;
    clients.classList.toggle('is-animated', !reduced);
    clients.classList.toggle('is-paused', userPaused || hovered || focused || !inView || document.hidden);
    pause.hidden = reduced;
    pause.setAttribute('aria-pressed', String(userPaused));
    pause.textContent = userPaused ? 'Continuar movimento' : 'Pausar movimento';
  }
  pause.addEventListener('click', () => { userPaused = !userPaused; syncClients(); });
  clients.addEventListener('mouseenter', () => { hovered = true; syncClients(); });
  clients.addEventListener('mouseleave', () => { hovered = false; syncClients(); });
  clients.addEventListener('focusin', () => { focused = true; syncClients(); });
  clients.addEventListener('focusout', event => { focused = clients.contains(event.relatedTarget); syncClients(); });
  viewport.addEventListener('pointerdown', () => { userPaused = true; syncClients(); });
  viewport.addEventListener('keydown', event => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      userPaused = true; syncClients();
    }
  });
  motionPreference.addEventListener('change', syncClients);
  document.addEventListener('visibilitychange', syncClients);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; syncClients(); }, {threshold:.05}).observe(clients);
  } else { inView = true; }
  syncClients();
}
