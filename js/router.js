/**
 * SPA Router — hash-based (#/) avec chargement de fichiers HTML via fetch.
 * Émet un événement custom "route-changed" sur window à chaque navigation.
 * Cache les pages déjà chargées pour navigation instantanée.
 */

const Router = (() => {
  /** @type {Map<string, string>} route path → fichier HTML */
  const routes = new Map();

  /** @type {Map<string, string>} cache path → contenu HTML */
  const cache = new Map();

  /** @type {string|null} fichier 404 */
  let notFoundFile = null;

  /**
   * Enregistre une route.
   * @param {string} path     — ex: "/" ou "/about"
   * @param {string} htmlFile — chemin vers le fichier HTML (ex: "pages/home.html")
   */
  function register(path, htmlFile) {
    routes.set(path, htmlFile);
  }

  /** Définit le fichier 404 */
  function setNotFound(htmlFile) {
    notFoundFile = htmlFile;
  }

  /** Navigue vers un path (met à jour le hash) */
  function navigate(path) {
    window.location.hash = `#${path}`;
  }

  /**
   * Charge un fichier HTML (avec cache).
   * @param {string} file — chemin relatif du fichier
   * @returns {Promise<string>}
   */
  async function loadPage(file) {
    if (cache.has(file)) return cache.get(file);

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      cache.set(file, html);
      return html;
    } catch (err) {
      console.error(`[Router] Erreur chargement ${file}:`, err);
      return `<main id="main-content" class="flex-1 flex items-center justify-center py-20">
        <div class="text-center px-4">
          <p class="text-4xl font-bold text-red-400">Erreur</p>
          <p class="mt-2 text-gray-600">Impossible de charger la page.</p>
        </div>
      </main>`;
    }
  }

  /** Résout la route courante et injecte le contenu */
  async function resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const file = routes.get(hash) || notFoundFile;

    if (!file) return;

    const content = await loadPage(file);
    const outlet = document.getElementById('app-content');
    if (outlet) {
      outlet.innerHTML = content;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Émet un événement pour mettre à jour l'UI (nav active, titre…)
    window.dispatchEvent(new CustomEvent('route-changed', { detail: { path: hash } }));
  }

  /** Initialise l'écoute du hash */
  function init() {
    window.addEventListener('hashchange', resolve);
    resolve();
  }

  /**
   * Préchargement de toutes les pages en background.
   * Appeler après init() pour une navigation encore plus fluide.
   */
  function preloadAll() {
    for (const file of routes.values()) {
      if (!cache.has(file)) loadPage(file);
    }
    if (notFoundFile && !cache.has(notFoundFile)) loadPage(notFoundFile);
  }

  return { register, setNotFound, navigate, init, preloadAll };
})();

export default Router;
