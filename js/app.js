/**
 * App.js — Point d'entrée de la SPA
 * Initialise le shell (header/footer), enregistre les routes HTML, lance le router.
 */

import Router from './router.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

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

// ── Initialisation ──
function init() {
  // 1. Injecter le shell (header + footer)
  document.getElementById('app-header').innerHTML = renderHeader();
  document.getElementById('app-footer').innerHTML = renderFooter();

  // 2. Initialiser le header (burger, liens actifs)
  initHeader();

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
