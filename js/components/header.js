/**
 * Composant Header — Navigation + Burger menu responsive
 */

const NAV_LINKS = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

/** Génère le HTML du header */
export function renderHeader() {
  return `
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo / Branding -->
        <a href="#/" class="flex items-center gap-2 text-gray-900 font-bold text-xl md:text-2xl tracking-tight"
           aria-label="Retour à l'accueil">
          <span aria-hidden="true" class="text-indigo-600 text-2xl md:text-3xl">&#9670;</span>
          <span>MonSite</span>
        </a>

        <!-- Navigation Desktop — caché sur mobile -->
        <ul class="hidden md:flex items-center gap-1 lg:gap-2" role="menubar">
          ${NAV_LINKS.map(
            (l) => `
            <li role="none">
              <a href="#${l.path}"
                 role="menuitem"
                 class="nav-link px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                 data-path="${l.path}">
                ${l.label}
              </a>
            </li>`
          ).join('')}
        </ul>

        <!-- Bouton Burger — visible uniquement mobile -->
        <button id="burger-btn"
                type="button"
                class="md:hidden relative w-11 h-11 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-expanded="false"
                aria-controls="mobile-menu"
                aria-label="Ouvrir le menu">
          <!-- Icône burger animée -->
          <span class="burger-icon block w-6 h-5 relative">
            <span class="burger-line absolute left-0 w-full h-0.5 bg-current rounded transition-all duration-300 top-0"></span>
            <span class="burger-line absolute left-0 w-full h-0.5 bg-current rounded transition-all duration-300 top-1/2 -translate-y-1/2"></span>
            <span class="burger-line absolute left-0 w-full h-0.5 bg-current rounded transition-all duration-300 bottom-0"></span>
          </span>
        </button>
      </div>
    </nav>

    <!-- Menu Mobile (overlay) -->
    <div id="mobile-menu"
         class="mobile-menu md:hidden fixed inset-0 top-16 z-40 invisible opacity-0 transition-all duration-300"
         aria-hidden="true">
      <!-- Backdrop -->
      <div class="mobile-menu-backdrop absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <!-- Panel -->
      <div class="mobile-menu-panel relative bg-white border-t border-gray-200 shadow-xl mx-4 mt-2 rounded-2xl overflow-hidden transform translate-y-[-8px] transition-transform duration-300">
        <ul class="flex flex-col py-3" role="menu">
          ${NAV_LINKS.map(
            (l) => `
            <li role="none">
              <a href="#${l.path}"
                 role="menuitem"
                 class="mobile-nav-link flex items-center px-6 py-3.5 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                 data-path="${l.path}">
                ${l.label}
              </a>
            </li>`
          ).join('')}
        </ul>
      </div>
    </div>
  </header>`;
}

/** Initialise le burger et l'état actif des liens */
export function initHeader() {
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

  // Fermer le menu en cliquant sur le backdrop
  menu.querySelector('.mobile-menu-backdrop')?.addEventListener('click', () => toggle(true));

  // Fermer le menu quand un lien mobile est cliqué
  menu.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => toggle(true));
  });

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      toggle(true);
      btn.focus();
    }
  });

  // Mettre à jour l'état actif des liens
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
  // Init
  updateActiveLink(window.location.hash.slice(1) || '/');
}
