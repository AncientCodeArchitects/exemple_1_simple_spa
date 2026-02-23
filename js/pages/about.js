/**
 * Page À propos
 */

export default function aboutPage() {
  return `
  <main id="main-content">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm sm:text-base font-semibold text-indigo-600 uppercase tracking-wider mb-2">À propos</p>
          <h1 id="about-heading" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Notre histoire, <br class="hidden sm:inline">notre mission
          </h1>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Nous sommes une équipe passionnée par la création d'expériences numériques
            qui allient design, performance et accessibilité.
          </p>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="py-16 sm:py-20 bg-white" aria-labelledby="values-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="values-heading" class="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 lg:mb-14">
          Nos valeurs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          ${[
            {
              title: 'Qualité',
              desc: "Chaque ligne de code est réfléchie. Nous ne faisons pas de compromis sur la qualité du produit livré.",
            },
            {
              title: 'Transparence',
              desc: "Communication ouverte, processus clair, pas de surprise. Vous savez toujours où en est votre projet.",
            },
            {
              title: 'Innovation',
              desc: "Nous explorons constamment les nouvelles technologies pour offrir les meilleures solutions possibles.",
            },
            {
              title: 'Accessibilité',
              desc: "Le web est pour tout le monde. Chaque projet respecte les standards d'accessibilité WCAG.",
            },
          ]
            .map(
              (v) => `
            <article class="flex gap-4 sm:gap-5">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-100 flex items-center justify-center">
                <span class="text-indigo-600 font-bold text-lg sm:text-xl">${v.title.charAt(0)}</span>
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5">${v.title}</h3>
                <p class="text-gray-600 text-sm sm:text-base leading-relaxed">${v.desc}</p>
              </div>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Chiffres clés -->
    <section class="py-16 sm:py-20 bg-gray-50" aria-labelledby="stats-heading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" class="sr-only">Nos chiffres clés</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          ${[
            { value: '50+', label: 'Projets livrés' },
            { value: '98%', label: 'Clients satisfaits' },
            { value: '5 ans', label: "D'expérience" },
            { value: '24h', label: 'Temps de réponse' },
          ]
            .map(
              (s) => `
            <div class="text-center p-6 sm:p-8 rounded-2xl bg-white border border-gray-100">
              <p class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-indigo-600">${s.value}</p>
              <p class="mt-1.5 text-sm sm:text-base text-gray-600">${s.label}</p>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>
  </main>`;
}
