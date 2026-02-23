/**
 * App.js — Point d'entrée de la SPA
 * Enregistre les routes HTML, lance le router, gère le header (burger + liens actifs).
 */

import Router from './router.js';

// ── Routes : path → fichier HTML + meta SEO ──
const ROUTES = {
  '/':          { file: 'pages/home.html',     title: 'MonSite — Accueil',    description: 'Template SPA moderne, mobile-first, accessible et optimisé SEO.' },
  '/a-propos':  { file: 'pages/about.html',    title: 'À propos — MonSite',   description: 'Découvrez notre équipe, nos valeurs et notre histoire.' },
  '/services':  { file: 'pages/services.html',  title: 'Services — MonSite',   description: 'Création de sites web, applications mobiles, design UI/UX et optimisation SEO.' },
  '/contact':   { file: 'pages/contact.html',   title: 'Contact — MonSite',    description: 'Contactez-nous pour discuter de votre projet. Réponse sous 24h.' },
};

function updateMeta(path) {
  const route = ROUTES[path] || ROUTES['/'];
  document.title = route.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', route.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', route.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', route.description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', route.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', route.description);
}

/** Initialise le burger menu et l'état actif des liens */
function initHeader() {
  const btn = document.getElementById('burger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const toggle = (forceClose = false) => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const shouldClose = forceClose || isOpen;

    btn.setAttribute('aria-expanded', String(!shouldClose));
    menu.setAttribute('aria-hidden', String(shouldClose));

    if (shouldClose) {
      menu.classList.add('invisible', 'opacity-0');
      menu.querySelector('.mobile-menu-panel')?.classList.add('translate-y-[-8px]');
      document.body.classList.remove('overflow-hidden');
    } else {
      menu.classList.remove('invisible', 'opacity-0');
      menu.querySelector('.mobile-menu-panel')?.classList.remove('translate-y-[-8px]');
      document.body.classList.add('overflow-hidden');
    }
  };

  btn.addEventListener('click', () => toggle());
  menu.querySelector('.mobile-menu-backdrop')?.addEventListener('click', () => toggle(true));
  menu.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => toggle(true));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      toggle(true);
      btn.focus();
    }
  });

  const updateActiveLink = (path) => {
    document.querySelectorAll('[data-path]').forEach((link) => {
      const isActive = link.dataset.path === path;
      link.classList.toggle('text-indigo-600', isActive);
      link.classList.toggle('bg-indigo-50', isActive);
      link.classList.toggle('text-gray-600', !isActive && link.classList.contains('nav-link'));
      link.classList.toggle('text-gray-700', !isActive && link.classList.contains('mobile-nav-link'));
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  window.addEventListener('route-changed', (e) => updateActiveLink(e.detail.path));
  updateActiveLink(window.location.hash.slice(1) || '/');
}

// ── Initialisation ──
function init() {
  // 1. Initialiser le header (burger, liens actifs)
  initHeader();

  // 2. Année du copyright dynamique
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Enregistrer les routes → fichiers HTML
  for (const [path, route] of Object.entries(ROUTES)) {
    Router.register(path, route.file);
  }
  Router.setNotFound('pages/404.html');

  // 4. Mettre à jour les meta à chaque changement de route
  window.addEventListener('route-changed', (e) => {
    updateMeta(e.detail.path);
    // Re-trigger animation de page
    const outlet = document.getElementById('app-content');
    if (outlet) {
      outlet.style.animation = 'none';
      void outlet.offsetHeight; // force reflow
      outlet.style.animation = '';
    }
  });

  // 5. Lancer le router
  Router.init();

  // 6. Précharger toutes les pages en arrière-plan
  Router.preloadAll();
}

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
