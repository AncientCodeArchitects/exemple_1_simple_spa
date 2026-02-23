/**
 * Composant Footer — Sémantique + responsive
 */

export function renderFooter() {
  const year = new Date().getFullYear();

  return `
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Contenu principal du footer -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">

        <!-- Branding -->
        <div class="sm:col-span-2 lg:col-span-1">
          <a href="#/" class="inline-flex items-center gap-2 text-white font-bold text-xl">
            <span aria-hidden="true" class="text-indigo-400 text-2xl">&#9670;</span>
            <span>MonSite</span>
          </a>
          <p class="mt-3 text-sm leading-relaxed text-gray-400 max-w-xs">
            Un site moderne, rapide et accessible. Conçu mobile-first avec une attention particulière au détail.
          </p>
        </div>

        <!-- Navigation -->
        <nav aria-label="Navigation du footer">
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
          <ul class="space-y-2.5">
            <li><a href="#/" class="text-sm hover:text-indigo-400 transition-colors">Accueil</a></li>
            <li><a href="#/a-propos" class="text-sm hover:text-indigo-400 transition-colors">À propos</a></li>
            <li><a href="#/services" class="text-sm hover:text-indigo-400 transition-colors">Services</a></li>
            <li><a href="#/contact" class="text-sm hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </nav>

        <!-- Légal -->
        <nav aria-label="Informations légales">
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Légal</h3>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Mentions légales</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">Politique de confidentialité</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">CGU</a></li>
          </ul>
        </nav>

        <!-- Contact -->
        <address class="not-italic">
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
          <ul class="space-y-2.5 text-sm">
            <li>
              <a href="mailto:contact@monsite.fr" class="hover:text-indigo-400 transition-colors">
                contact@monsite.fr
              </a>
            </li>
            <li>
              <a href="tel:+33100000000" class="hover:text-indigo-400 transition-colors">
                01 00 00 00 00
              </a>
            </li>
            <li class="text-gray-400">Paris, France</li>
          </ul>
        </address>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>&copy; ${year} MonSite. Tous droits réservés.</p>
        <p>Fait avec <span class="text-red-400" aria-label="amour">&#9829;</span> en France</p>
      </div>
    </div>
  </footer>`;
}
