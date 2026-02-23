/**
 * Page Accueil
 */

export default function homePage() {
  return `
  <main id="main-content">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50" aria-labelledby="hero-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div class="max-w-3xl">
          <h1 id="hero-heading" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Créez quelque chose
            <span class="text-indigo-600">d'extraordinaire</span>
          </h1>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Un template SPA moderne, rapide et accessible. Conçu mobile-first avec Tailwind CSS,
            une architecture modulaire et tout le nécessaire pour le SEO.
          </p>
          <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#/services"
               class="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
              Découvrir nos services
            </a>
            <a href="#/contact"
               class="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 rounded-xl bg-white text-gray-700 font-semibold text-base border border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      <!-- Élément décoratif -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl pointer-events-none" aria-hidden="true"></div>
    </section>

    <!-- Features Section -->
    <section class="py-16 sm:py-20 lg:py-24 bg-white" aria-labelledby="features-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 id="features-heading" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Pourquoi nous choisir
          </h2>
          <p class="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg">
            Des solutions pensées pour performer sur tous les écrans.
          </p>
        </header>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          ${[
            {
              icon: '⚡',
              title: 'Ultra rapide',
              desc: 'SPA sans rechargement de page. Navigation instantanée entre les sections.',
            },
            {
              icon: '📱',
              title: 'Mobile first',
              desc: 'Conçu pour offrir une expérience optimale sur smartphone, tablette et desktop.',
            },
            {
              icon: '♿',
              title: 'Accessible',
              desc: 'Balises sémantiques, ARIA, navigation au clavier. Conforme WCAG.',
            },
            {
              icon: '🔍',
              title: 'SEO optimisé',
              desc: 'Meta tags, Open Graph, données structurées. Prêt pour les moteurs de recherche.',
            },
            {
              icon: '🎨',
              title: 'Design soigné',
              desc: 'Typographie lisible, espacements cohérents, animations subtiles.',
            },
            {
              icon: '🛠️',
              title: 'Modulaire',
              desc: 'Architecture en composants. Facile à maintenir et à faire évoluer.',
            },
          ]
            .map(
              (f) => `
          <article class="group p-6 sm:p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300">
            <div class="text-3xl sm:text-4xl mb-4" aria-hidden="true">${f.icon}</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">${f.title}</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed">${f.desc}</p>
          </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-indigo-600" aria-labelledby="cta-heading">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Prêt à démarrer votre projet ?
        </h2>
        <p class="mt-3 sm:mt-4 text-indigo-100 text-base sm:text-lg max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
        </p>
        <a href="#/contact"
           class="mt-8 inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-indigo-600 font-semibold text-base hover:bg-indigo-50 active:bg-indigo-100 transition-colors shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600">
          Contactez-nous
        </a>
      </div>
    </section>
  </main>`;
}
