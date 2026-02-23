/**
 * Page Services
 */

export default function servicesPage() {
  const services = [
    {
      icon: '🌐',
      title: 'Création de sites web',
      desc: 'Sites vitrines, e-commerce, applications web — sur mesure et optimisés pour la performance.',
      features: ['Design responsive', 'SEO intégré', 'CMS sur mesure'],
    },
    {
      icon: '📱',
      title: 'Applications mobiles',
      desc: 'Applications natives et cross-platform pour iOS et Android, avec une UX soignée.',
      features: ['iOS & Android', 'Notifications push', 'Mode hors-ligne'],
    },
    {
      icon: '🎨',
      title: 'Design UI/UX',
      desc: "Interfaces utilisateur intuitives et esthétiques, prototypage rapide et tests utilisateurs.",
      features: ['Prototypage Figma', 'Tests utilisateurs', 'Design system'],
    },
    {
      icon: '🚀',
      title: 'Optimisation & SEO',
      desc: 'Audit de performance, optimisation du temps de chargement et référencement naturel.',
      features: ['Audit complet', 'Core Web Vitals', 'Stratégie de contenu'],
    },
  ];

  return `
  <main id="main-content">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-16 sm:py-20 lg:py-24" aria-labelledby="services-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm sm:text-base font-semibold text-indigo-600 uppercase tracking-wider mb-2">Services</p>
          <h1 id="services-heading" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Ce que nous <span class="text-indigo-600">faisons</span>
          </h1>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Des prestations complètes pour donner vie à vos projets numériques,
            de la conception au déploiement.
          </p>
        </div>
      </div>
    </section>

    <!-- Liste des services -->
    <section class="py-16 sm:py-20 bg-white" aria-labelledby="services-list-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-list-heading" class="sr-only">Liste de nos services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          ${services
            .map(
              (s) => `
          <article class="p-6 sm:p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300">
            <div class="text-3xl sm:text-4xl mb-4" aria-hidden="true">${s.icon}</div>
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">${s.title}</h3>
            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">${s.desc}</p>
            <ul class="flex flex-wrap gap-2" aria-label="Points clés de ${s.title}">
              ${s.features
                .map(
                  (f) =>
                    `<li class="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-medium">${f}</li>`
                )
                .join('')}
            </ul>
          </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Processus -->
    <section class="py-16 sm:py-20 bg-gray-50" aria-labelledby="process-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 id="process-heading" class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Notre processus
          </h2>
          <p class="mt-3 sm:mt-4 text-gray-600">4 étapes simples pour mener à bien votre projet.</p>
        </header>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          ${[
            { step: '01', title: 'Découverte', desc: 'Analyse de vos besoins et objectifs.' },
            { step: '02', title: 'Conception', desc: 'Maquettes, prototypes et validation.' },
            { step: '03', title: 'Développement', desc: 'Code propre, tests et itérations.' },
            { step: '04', title: 'Lancement', desc: 'Déploiement, formation et suivi.' },
          ]
            .map(
              (p) => `
          <div class="text-center p-6 sm:p-8">
            <span class="inline-block text-4xl sm:text-5xl font-extrabold text-indigo-200 mb-3">${p.step}</span>
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">${p.title}</h3>
            <p class="text-gray-600 text-sm sm:text-base">${p.desc}</p>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>
  </main>`;
}
