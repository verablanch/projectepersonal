const root = document.documentElement;
const nav = document.querySelector('#main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('#theme-toggle');

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar navegación' : 'Abrir navegación');
  nav.classList.toggle('is-open', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir navegación');
  });
});

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
});

document.querySelectorAll('.accordion-item > button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const opening = !item.classList.contains('is-open');
    item.classList.toggle('is-open', opening);
    button.setAttribute('aria-expanded', String(opening));
  });
});

const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
window.addEventListener('pointermove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
}, { passive: true });
document.addEventListener('pointerover', (event) => {
  cursor.classList.toggle('is-large', Boolean(event.target.closest('a,button,.accordion-item')));
});

function initScrollEffects() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !window.gsap || !window.ScrollTrigger || !window.Lenis) {
    document.body.classList.add('scroll-effects-fallback');
    return;
  }

  const { gsap, ScrollTrigger, Lenis } = window;
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target || link.closest('.main-nav') && window.innerWidth <= 760) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -12, duration: 1.1 });
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });

  if (!reduceMotion) {
    gsap.from('.hero-kicker', { y: 18, opacity: 0, duration: .8, delay: .1, ease: 'power2.out' });
    gsap.from('.hero-title span', { yPercent: 105, stagger: .12, duration: 1.15, delay: .2, ease: 'power3.out' });
    gsap.from('.hero-route .route-line', { strokeDasharray: 1800, strokeDashoffset: 1800, duration: 1.8, delay: .25, ease: 'power2.out' });
    gsap.from('.hero-bottom > *', { y: 16, opacity: 0, stagger: .1, duration: .7, delay: .7, ease: 'power2.out' });

    const philosophy = document.querySelector('#philosophy');
    const stages = [...philosophy.querySelectorAll('.stage')];
    stages.forEach((stage, index) => {
      gsap.set(stage, { position: 'absolute', top: '50%', yPercent: -50, opacity: index === 0 ? 1 : 0 });
    });
    ScrollTrigger.create({
      trigger: philosophy,
      start: 'top top',
      end: '+=370%',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const position = self.progress * (stages.length - 1);
        const active = Math.min(stages.length - 1, Math.floor(position + .001));
        stages.forEach((stage, index) => {
          const distance = Math.abs(position - index);
          gsap.set(stage, { opacity: gsap.utils.clamp(0, 1, 1 - distance * 1.55), y: (index - position) * 40 - 50 });
        });
        philosophy.querySelector('.stage-caption').textContent = ['Mañanas', 'Tardes', 'Con los niños', 'Lo que no cambia'][active];
        philosophy.querySelector('.stage-number').textContent = `0${active + 1} / 0${stages.length}`;
        philosophy.querySelector('.stage-mark__dot').style.transform = `translate(${position * 42}%, ${Math.sin(position * Math.PI) * 30}%)`;
        philosophy.querySelector('.stage-mark__ring').style.transform = `rotate(${position * 45}deg)`;
      }
    });
    gsap.to('.vertical-rule', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: philosophy, start: 'top bottom', end: 'bottom top', scrub: true } });

    const dataTrack = document.querySelector('.data-track');
    const dataDistance = () => Math.max(0, dataTrack.scrollWidth - window.innerWidth + 24);
    ScrollTrigger.create({
      trigger: '#works', start: 'top top', end: () => `+=${dataDistance() + window.innerWidth * 1.2}`, pin: true, scrub: true, invalidateOnRefresh: true,
      onUpdate: (self) => {
        const move = Math.min(1, self.progress / .72);
        gsap.set(dataTrack, { x: -move * dataDistance() });
        gsap.set('.data-rail i', { scaleX: move });
        const index = Math.min(6, Math.floor(move * 5.999) + 1);
        document.querySelector('.data-count span:last-child').textContent = `${String(index).padStart(2, '0')} — 06`;
      }
    });

    gsap.from('.track-list article', { x: 22, opacity: 0, stagger: .06, duration: .6, ease: 'power2.out', scrollTrigger: { trigger: '.track-list', start: 'top 75%' } });
    gsap.from('.questions-grid article', { y: 24, opacity: 0, stagger: .1, duration: .65, ease: 'power2.out', scrollTrigger: { trigger: '.questions-grid', start: 'top 75%' } });
  }

  ScrollTrigger.create({ trigger: '#hero', start: 'top top', end: 'bottom top', onUpdate: (self) => {
    document.querySelector('.hero-route').style.transform = `translateY(${self.progress * 7}%)`;
  }});
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    ScrollTrigger.create({ trigger: target, start: 'top 30%', end: 'bottom 30%', onToggle: (self) => {
      gsap.to(link.querySelector('i'), { scaleX: self.isActive ? 1 : 0, duration: .25, transformOrigin: 'left' });
    }});
  });
}

function moveCursor() {
  cursorX += (mouseX - cursorX) * .18;
  cursorY += (mouseY - cursorY) * .18;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(moveCursor);
}
moveCursor();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollEffects, { once: true });
} else {
  initScrollEffects();
}


// 12 canciones: portadas (carpeta img/portadas o Spotify) y reproductor de Spotify
(() => {
  const tiles = [...document.querySelectorAll('.song-tile')];
  if (!tiles.length) return;
  tiles.forEach((tile, i) => {
    const img = tile.querySelector('img');
    const fromSpotify = () => fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent('https://open.spotify.com/track/' + tile.dataset.id)}`)
      .then(r => r.json()).then(d => { img.src = d.thumbnail_url; }).catch(() => {});
    img.onload = () => tile.classList.add('has-cover');
    img.onerror = () => { img.onerror = null; fromSpotify(); };
    img.src = `img/portadas/${String(i + 1).padStart(2, '0')}.jpg`;
  });
  const bar = document.querySelector('.song-player');
  const host = document.getElementById('spotify-player');
  let api = null, controller = null, current = null;
  const loadApi = () => api || (api = new Promise((resolve, reject) => {
    window.onSpotifyIframeApiReady = resolve;
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    script.onerror = reject;
    document.head.appendChild(script);
  }));
  const setPlaying = tile => tiles.forEach(t => t.classList.toggle('is-playing', t === tile));
  tiles.forEach(tile => tile.addEventListener('click', async () => {
    if (current === tile && controller) { controller.togglePlay(); return; }
    current = tile;
    setPlaying(tile);
    bar.hidden = false;
    const uri = `spotify:track:${tile.dataset.id}`;
    try {
      const IFrameAPI = await loadApi();
      if (!controller) {
        IFrameAPI.createController(host, { uri, width: '100%', height: 80 }, c => {
          controller = c;
          c.addListener('ready', () => c.play());
          c.addListener('playback_update', e => { if (current && e.data.isPaused) current.classList.remove('is-playing'); else if (current) current.classList.add('is-playing'); });
        });
      } else { controller.loadUri(uri); controller.play(); }
    } catch (error) {
      bar.hidden = true; setPlaying(null); current = null;
      window.open(`https://open.spotify.com/track/${tile.dataset.id}`, '_blank', 'noopener');
    }
  }));
  document.getElementById('song-close').addEventListener('click', () => {
    if (controller) controller.pause();
    bar.hidden = true; setPlaying(null); current = null;
  });
})();
