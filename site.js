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
  if (motionPreference.matches) {
    activeAnimations.forEach(animation => animation.finish());
    document.querySelector('.qr-scene')?.classList.remove('sequence-pending');
  }
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
async function playScene(scene) {
  if (motionPreference.matches) return;
  if (scene.dataset.scene === 'hero') {
    animate(scene.querySelector('.visit-ticket'), [
      {transform: 'translateY(18px)', opacity: .45},
      {transform: 'translateY(-3px)', opacity: 1, offset: .78},
      {transform: 'translateY(0)', opacity: 1}
    ], {duration: 680, easing: ease, delay: 180});
  } else {
    const scan = animate(scene.querySelector('.scan-line'), [
      {transform: 'translateY(0)', opacity: 0},
      {transform: 'translateY(4px)', opacity: 1, offset: .12},
      {transform: 'translateY(145px)', opacity: 1, offset: .82},
      {transform: 'translateY(153px)', opacity: 0}
    ], {duration: 2300, easing: 'ease-in-out'});
    if (scan) await scan.finished.catch(() => {});
    if (!scene.isConnected) return;
    const stamp = animate(scene.querySelector('.stamp-new'), [
      {background: '#f4b512', opacity: .48, transform: 'scale(.94)'},
      {background: '#f4b512', opacity: 1, transform: 'scale(1.15)', offset: .7},
      {background: '#f4b512', opacity: 1, transform: 'scale(1)'}
    ], {duration: 360, easing: ease});
    if (stamp) await stamp.finished.catch(() => {});
    if (!scene.isConnected) return;
    scene.querySelector('.stamp-new').classList.add('is-registered');
    scene.classList.remove('sequence-pending');
    animate(scene.querySelector('.reward-ticket'), [
      {transform: 'translateY(14px) rotate(2deg)', opacity: 0},
      {transform: 'translateY(-2px) rotate(2deg)', opacity: 1, offset: .8},
      {transform: 'rotate(2deg)', opacity: 1}
    ], {duration: 520, easing: ease});
  }
}
const qrScene = document.querySelector('.qr-scene');
if (!motionPreference.matches && 'IntersectionObserver' in window) qrScene?.classList.add('sequence-pending');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { observer.unobserve(entry.target); playScene(entry.target); }
  }), {threshold: .3});
  document.querySelectorAll('[data-scene]').forEach(scene => observer.observe(scene));
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) activeAnimations.forEach(animation => animation.finish());
});

/* Gentle phone loop and continuous customer reel. Hover never interrupts them. */
function watchLoop(element, animatedClass) {
  if (!element) return;
  let inView = !('IntersectionObserver' in window);
  function sync() {
    element.classList.toggle(animatedClass, !motionPreference.matches);
    element.classList.toggle('is-paused', !inView || document.hidden);
  }
  motionPreference.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, {threshold: .05}).observe(element);
  }
  sync();
}
watchLoop(document.querySelector('.clients-section'), 'is-animated');
watchLoop(document.querySelector('.hero-scene'), 'has-phone-motion');
